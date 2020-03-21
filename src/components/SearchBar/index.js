import React, {useState} from 'react'
import 'gestalt/dist/gestalt.css'
import { SearchField } from "gestalt"

function SearchBar(props) {
    const [value, setValue] = useState("");

    return (
        <SearchField
            accessibilityLabel="Search Field"
            id="searchField"
            onChange={(query) => setValue(query.value)}
            placeholder={props.placeholder}
            value={value}
        />
    )
}

export default SearchBar
