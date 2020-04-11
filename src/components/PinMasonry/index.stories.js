import React from 'react'
import PinMasonry from './index'
import { action } from '@storybook/addon-actions';

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
        "author": "Chance the Rapper",
        "image": "https://media.pitchfork.com/photos/5d3f963c87626200084cdaa0/1:1/w_600/Chance-The-Rapper-The-Big-Day-1564418470-640x640.jpg",
        "height": 600,
        "width": 600
    },
    {
        "title": "Surfing 2",
        "author": "Hit the waves!",
        "image": "https://images.unsplash.com/photo-1519789110007-0e751882be76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1029&q=80",
        "height": 689,
        "width": 1005
    },
    {
        "title": "Pass the Buck 2",
        "author": "Laurence Juber",
        "image": "https://m.media-amazon.com/images/I/61mhCow+yQL._SS500_.jpg",
        "height": 500,
        "width": 500
    },
    {
        "title": "Dogs are Great 2",
        "author": "Woof woof",
        "image": "https://www.guidedogs.org/wp-content/uploads/2019/11/website-donate-mobile.jpg",
        "height": 667,
        "width": 500
    },
    {
        "title": "Baby Yoda 2",
        "author": "He baby",
        "image": "https://www.indiewire.com/wp-content/uploads/2019/11/960x0-2.jpg?w=780",
        "height": 462,
        "width": 780
    },
    {
        "title": "The Big Day 3",
        "author": "Chance the Rapper",
        "image": "https://media.pitchfork.com/photos/5d3f963c87626200084cdaa0/1:1/w_600/Chance-The-Rapper-The-Big-Day-1564418470-640x640.jpg",
        "height": 600,
        "width": 600
    },
    {
        "title": "Surfing 3",
        "author": "Hit the waves!",
        "image": "https://images.unsplash.com/photo-1519789110007-0e751882be76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1029&q=80",
        "height": 689,
        "width": 1005
    },
    {
        "title": "Pass the Buck 3",
        "author": "Laurence Juber",
        "image": "https://m.media-amazon.com/images/I/61mhCow+yQL._SS500_.jpg",
        "height": 500,
        "width": 500
    },
    {
        "title": "Dogs are Great 3",
        "author": "Woof woof",
        "image": "https://www.guidedogs.org/wp-content/uploads/2019/11/website-donate-mobile.jpg",
        "height": 667,
        "width": 500
    },
    {
        "title": "Baby Yoda 3",
        "author": "He baby",
        "image": "https://www.indiewire.com/wp-content/uploads/2019/11/960x0-2.jpg?w=780",
        "height": 462,
        "width": 780
    }
]

export default {
    title: 'Pin Masonry',
    component: PinMasonry,
}

export const Default = () => (
    <PinMasonry pins={fakeData} />
)

export const Empty = () => (
    <PinMasonry pins={[]} />
)
