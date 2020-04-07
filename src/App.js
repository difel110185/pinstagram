import React, {useReducer, useEffect} from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import PinMasonry from "./components/PinMasonry";
import PinDetails from "./components/PinDetails";
import {Spinner} from "gestalt";
import {getPins} from './networkManager';
import LoginForm from "./components/LoginForm";

function App() {
  const initialState = {
    loggedIn: !!(localStorage.getItem('token')),
    showingLoginForm: !(localStorage.getItem('token')),
    selectedPin: undefined,
    pins: [],
    loading: false,
    search: ""
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'showLoginForm': return {...state, showingLoginForm: true};
      case 'hideLoginForm': return {...state, showingLoginForm: false};
      case 'login': return {...state, showingLoginForm: false, loggedIn: true};
      case 'logout': return {...state, showingLoginForm: true, loggedIn: false};
      case 'setSelectedPin': return {...state, selectedPin: action.selectedPin};
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
      getPins(search)
        .then((response) => {
          const pins = response.data.results.map(pin => {
            return {
              ...pin,
              open() {
                dispatch({type: 'setSelectedPin', selectedPin: pin})
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
            <LoginForm dismiss={() => dispatch({type: 'hideLoginForm'})} login={() => dispatch({type: 'login'})} />
        )}
      </div>
  );
}

export default App;
