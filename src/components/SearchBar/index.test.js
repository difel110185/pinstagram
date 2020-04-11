import React from 'react'
import { render } from '@testing-library/react'
import SearchBar from './index'

const placeholder = "Search and explore";

test('Renders the placeholder', () => {
    let { queryByPlaceholderText } = render(<SearchBar placeholder={placeholder} />)
    let ph = queryByPlaceholderText(placeholder)
    expect(ph).toBeInTheDocument()
})
