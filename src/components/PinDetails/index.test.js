import React from 'react'
import { render } from '@testing-library/react'
import PinDetails from './index'

const fakeData = {
    "title": "The Big Day",
    "author": "Chance the Rapper",
    "description": "The Big Day is the debut studio album by American rapper Chance the Rapper, released on July 26, 2019. The album follows several mixtapes by the rapper including the reissue of his collaborative Merry Christmas Lil' Mama in 2017, and is his first solo project since Coloring Book in 2016.",
    "image": "https://media.pitchfork.com/photos/5d3f963c87626200084cdaa0/1:1/w_600/Chance-The-Rapper-The-Big-Day-1564418470-640x640.jpg",
    "height": 600,
    "width": 600
}

test('Renders the title', () => {
    let { queryByText } = render(<PinDetails data={fakeData} />)
    let title = queryByText(fakeData.title)
    expect(title).toBeInTheDocument()
})

test("Renders the author's name", () => {
    let { queryByText } = render(<PinDetails data={fakeData} />)
    let title = queryByText(fakeData.author)
    expect(title).toBeInTheDocument()
})

test('Renders the description', () => {
    let { queryByText } = render(<PinDetails data={fakeData} />)
    let description = queryByText(fakeData.description)
    expect(description).toBeInTheDocument()
})

test('Renders the image', () => {
    let { queryByAltText } = render(<PinDetails data={fakeData} />)
    let image = queryByAltText(fakeData.title)
    expect(image).toBeInTheDocument()
    expect(image.getAttribute('src')).toBe(fakeData.image)
})
