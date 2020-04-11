import React from 'react'
import { render } from '@testing-library/react'
import Pin from './index'

const fakeData = {
    "title": "The Big Day",
    "author": "Chance the Rapper",
    "image": "https://media.pitchfork.com/photos/5d3f963c87626200084cdaa0/1:1/w_600/Chance-The-Rapper-The-Big-Day-1564418470-640x640.jpg",
    "height": 600,
    "width": 600
}

test('Renders the title', () => {
    let { queryByText } = render(<Pin data={fakeData} />)
    let title = queryByText(fakeData.title)
    expect(title).toBeInTheDocument()
})

test("Renders the author's name", () => {
    let { queryByText } = render(<Pin data={fakeData} />)
    let title = queryByText(fakeData.author)
    expect(title).toBeInTheDocument()
})

test('Renders the image', () => {
    let { queryByAltText } = render(<Pin data={fakeData} />)
    let image = queryByAltText(fakeData.title)
    expect(image).toBeInTheDocument()
    expect(image.getAttribute('src')).toBe(fakeData.image)
})
