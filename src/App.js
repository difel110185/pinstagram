import React, {useReducer, useEffect} from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import PinMasonry from "./components/PinMasonry";
import PinDetails from "./components/PinDetails";
import {Spinner} from "gestalt";
import {getPins, likePin} from './networkManager';
import LoginForm from "./components/LoginForm";

function App() {
  const initialState = {
    loggedIn: false,
    showingLoginForm: true,
    selectedPin: undefined,
    pins: [],
    loading: false,
    search: "",
    email: "",
    likedPinId: undefined,
    liked: undefined
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'showLoginForm': return {...state, showingLoginForm: true};
      case 'hideLoginForm': return {...state, showingLoginForm: false};
      case 'login': return {...state, showingLoginForm: false, loggedIn: true, email: action.email};
      case 'logout': return {...state, showingLoginForm: true, loggedIn: false, email: undefined};
      case 'setSelectedPin': return {...state, selectedPin: action.selectedPin};
      case 'likePin': return {...state, likedPinId: action.likedPinId, liked: action.liked};
      case 'dismissModal': return {...state, selectedPin: undefined};
      case 'setPins': return {...state, pins: action.pins};
      case 'showLoading': return {...state, loading: true};
      case 'hideLoading': return {...state, loading: false};
      case 'setSearch': return {...state, search: action.search};
      default: throw new Error('Unexpected action: ' + action);
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = (search) => {
    if (state.loggedIn)
      getPins(search, state.email)
        .then((response) => {
          const pins = response.data.results.map(pin => {
            return {
              ...pin,
              open() {
                dispatch({type: 'setSelectedPin', selectedPin: pin})
              },
              like() {
                console.log(pin.id)
                console.log("liked: " + (pin.liked !== 1))
                dispatch({type: 'likePin', likedPinId: pin.id, liked: (pin.liked !== 1)})
              }
            }
          })

          dispatch({type: 'setPins', pins: pins})
        })
        .catch((error) => {
          console.log(error);
        })
        .then(() => {
          dispatch({type: 'hideLoading'})
        })
  }

  useEffect(() => {
    dispatch({type: 'showLoading'})
    fetchData(state.search)
  }, [state.search, state.loggedIn])

  useEffect(() => {
    if (state.liked !== undefined) {
      dispatch({type: 'showLoading'})
      likePin(state.email, state.likedPinId, state.liked).then((response) => {
        fetchData(state.search)
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        dispatch({type: 'hideLoading'})
      })
    }
  }, [state.likedPinId, state.liked])

  const setSearch = (search) => {
    dispatch({type: 'setSearch', search: search})
  }

  return (
      <div>
        <NavBar loggedIn={state.loggedIn} onSearch={setSearch} logoutButtonClick={() => dispatch({type: 'logout'})} loginButtonClick={() => dispatch({type: 'showLoginForm'})} signUpButtonClick={() => dispatch({type: 'showLoginForm'})} />
        <Spinner show={state.loading} accessibilityLabel="Loading pins..." />
        {(!state.loading &&
            <PinMasonry pins={state.pins}/>
        )}
        {(state.selectedPin &&
            <PinDetails data={state.selectedPin} dismiss={() => dispatch({type: 'dismissModal'})} />
        )}
        {(state.showingLoginForm &&
            <LoginForm dismiss={() => dispatch({type: 'hideLoginForm'})} login={(email) => dispatch({type: 'login', email: email})} />
        )}
      </div>
  );
}

export default App;
