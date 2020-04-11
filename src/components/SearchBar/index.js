import React, {useState, useEffect} from 'react'
import 'gestalt/dist/gestalt.css'
import { SearchField } from "gestalt"

const useDebounce = (cb, value, delay) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            cb(value)
        }, delay)

        return () => clearTimeout(timeout)
    }, [value])
}

function SearchBar(props) {
    const [value, setValue] = useState("");

    const onChange = (query) => {
        setValue(query.value);
        props.onChange(query.value);
    }

    useDebounce(() => {
        props.onChange(value)
    }, value, 1000)

    return (
        <SearchField accessibilityLabel="Search Field" id="searchField" onChange={(query) => onChange(query)} placeholder={props.placeholder} value={value}/>
    )
}

export default SearchBar
