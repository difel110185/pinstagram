import React, {useState, useEffect} from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import PinMasonry from "./components/PinMasonry";
import samplePinData from './samplePinData.json'
import PinDetails from "./components/PinDetails";
import {Spinner} from "gestalt";

function App() {
  const [selectedPin, setSelectedPin] = useState(undefined)
  const [pins, setPins] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")

  const fetchData = (search) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const pins = samplePinData.filter(pin => {
          if (!search)
            return true

          return pin.title.toLowerCase().includes(search.toLowerCase()) || pin.author.toLowerCase().includes(search.toLowerCase())
        }).map(pin => {
          return {
            ...pin,
            open() {
              setSelectedPin(pin)
            }
          }
        });

        resolve(pins);
      }, 2000)
    })
  }

  useEffect(() => {
    setLoading(true)
    fetchData(search).then(pins => {
      setPins(pins)
      setLoading(false)
    })
  }, [search])

  return (
      <div>
        <NavBar loggedIn={false} onSearch={setSearch} />
        <Spinner show={loading} accessibilityLabel="Loading pins..." />
        {(!loading &&
            <PinMasonry pins={pins}/>
        )}
        {(selectedPin &&
            <PinDetails data={selectedPin} dismiss={() => setSelectedPin(undefined)} />
        )}
      </div>
  );
}

export default App;
