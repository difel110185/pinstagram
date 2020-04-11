import React from 'react'
import { render } from '@testing-library/react'
import PinMasonry from './index'
import Pin from "../Pin";

const fakeData = [
    {
        "title": "The Big Day",
        "author": "Chance the Rapper",
        "image": "https://media.pitchfork.com/photos/5d3f963c87626200084cdaa0/1:1/w_600/Chance-The-Rapper-The-Big-Day-1564418470-640x640.jpg",
        "height": 600,
        "width": 600
    },
    {
        "title": "Surfing",
        "author": "Hit the waves!",
        "image": "https://images.unsplash.com/photo-1519789110007-0e751882be76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1029&q=80",
        "height": 689,
        "width": 1005
    },
    {
        "title": "Pass the Buck",
        "author": "Laurence Juber",
        "image": "https://m.media-amazon.com/images/I/61mhCow+yQL._SS500_.jpg",
        "height": 500,
        "width": 500
    },
    {
        "title": "Dogs are Great",
        "author": "Woof woof",
        "image": "https://www.guidedogs.org/wp-content/uploads/2019/11/website-donate-mobile.jpg",
        "height": 667,
        "width": 500
    },
    {
        "title": "Baby Yoda",
        "author": "He baby",
        "image": "https://www.indiewire.com/wp-content/uploads/2019/11/960x0-2.jpg?w=780",
        "height": 462,
        "width": 780
    },
    {
        "title": "The Big Day 2",
        "author": "Chance the Rapper 2",
        "image": "https://media.pitchfork.com/photos/5d3f963c87626200084cdaa0/1:1/w_600/Chance-The-Rapper-The-Big-Day-1564418470-640x640.jpg",
        "height": 600,
        "width": 600
    },
    {
        "title": "Surfing 2",
        "author": "Hit the waves! 2",
        "image": "https://images.unsplash.com/photo-1519789110007-0e751882be76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1029&q=80",
        "height": 689,
        "width": 1005
    },
    {
        "title": "Pass the Buck 2",
        "author": "Laurence Juber 2",
        "image": "https://m.media-amazon.com/images/I/61mhCow+yQL._SS500_.jpg",
        "height": 500,
        "width": 500
    },
    {
        "title": "Dogs are Great 2",
        "author": "Woof woof 2",
        "image": "https://www.guidedogs.org/wp-content/uploads/2019/11/website-donate-mobile.jpg",
        "height": 667,
        "width": 500
    },
    {
        "title": "Baby Yoda 2",
        "author": "He baby 2",
        "image": "https://www.indiewire.com/wp-content/uploads/2019/11/960x0-2.jpg?w=780",
        "height": 462,
        "width": 780
    },
    {
        "title": "The Big Day 3",
        "author": "Chance the Rapper 3",
        "image": "https://media.pitchfork.com/photos/5d3f963c87626200084cdaa0/1:1/w_600/Chance-The-Rapper-The-Big-Day-1564418470-640x640.jpg",
        "height": 600,
        "width": 600
    },
    {
        "title": "Surfing 3",
        "author": "Hit the waves! 3",
        "image": "https://images.unsplash.com/photo-1519789110007-0e751882be76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1029&q=80",
        "height": 689,
        "width": 1005
    },
    {
        "title": "Pass the Buck 3",
        "author": "Laurence Juber 3",
        "image": "https://m.media-amazon.com/images/I/61mhCow+yQL._SS500_.jpg",
        "height": 500,
        "width": 500
    },
    {
        "title": "Dogs are Great 3",
        "author": "Woof woof 3",
        "image": "https://www.guidedogs.org/wp-content/uploads/2019/11/website-donate-mobile.jpg",
        "height": 667,
        "width": 500
    },
    {
        "title": "Baby Yoda 3",
        "author": "He baby 3",
        "image": "https://www.indiewire.com/wp-content/uploads/2019/11/960x0-2.jpg?w=780",
        "height": 462,
        "width": 780
    }
]

test('Renders the titles', () => {
    let { queryByText } = render(<PinMasonry pins={fakeData} />)
    for (let pin of fakeData) {
        let title = queryByText(pin.title)
        expect(title).toBeInTheDocument()
    }
})

test('Renders the authors', () => {
    let { queryByText } = render(<PinMasonry pins={fakeData} />)
    for (let pin of fakeData) {
        let author = queryByText(pin.author)
        expect(author).toBeInTheDocument()
    }
})

test('Renders the images', () => {
    let { queryByAltText } = render(<PinMasonry pins={fakeData} />)
    for (let pin of fakeData) {
        let image = queryByAltText(pin.title)
        expect(image).toBeInTheDocument()
        expect(image.getAttribute('src')).toBe(pin.image)
    }
})

test('Renders empty masonry', () => {
    let { queryByText } = render(<PinMasonry pins={[]} />)
    let author = queryByText("There are 0 results.")
    expect(author).toBeInTheDocument()
})
