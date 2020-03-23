import React, {useReducer, useEffect} from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import PinMasonry from "./components/PinMasonry";
import PinDetails from "./components/PinDetails";
import {Spinner} from "gestalt";
import axios from "axios";

function App() {
  const initialState = {
    selectedPin: undefined,
    pins: [],
    loading: false,
    search: ""
  }

  const reducer = (state, action) => {
    switch (action.type) {
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
    axios.get('https://api.unsplash.com/search/photos?page=1&per_page=100&client_id=mibyxpcYkfY2kvWPWuVRSF2syIdWa8pcPCFM4kS7K-s&query=' + search)
      .then((response) => {
        const pins = response.data.results.map(pin => {
          const fullPin = {
            author: pin.user.name,
            title: pin.description || pin.alt_description || pin.id,
            image: pin.urls.small,
            width: pin.width,
            height: pin.height
          }

          return {
            ...fullPin,
            open() {
              dispatch({type: 'setSelectedPin', selectedPin: fullPin})
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
  }, [state.search])

  const setSearch = (search) => {
    dispatch({type: 'setSearch', search: search})
  }

  return (
      <div>
        <NavBar loggedIn={false} onSearch={setSearch} />
        <Spinner show={state.loading} accessibilityLabel="Loading pins..." />
        {(!state.loading &&
            <PinMasonry pins={state.pins}/>
        )}
        {(state.selectedPin &&
            <PinDetails data={state.selectedPin} dismiss={() => dispatch({type: 'dismissModal'})} />
        )}
      </div>
  );
}

export default App;
