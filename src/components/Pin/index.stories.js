import React from 'react'
import Pin from './index'
import { action } from '@storybook/addon-actions';

const fakeData = {
    "title": "The Big Day",
    "author": "Chance the Rapper",
    "image": "https://media.pitchfork.com/photos/5d3f963c87626200084cdaa0/1:1/w_600/Chance-The-Rapper-The-Big-Day-1564418470-640x640.jpg",
    "height": 600,
    "width": 600
}

export default {
    title: 'Pin',
    component: Pin,
}

export const Default = () => (
    <Pin data={{...fakeData, liked: false}} onOpen={action('open')} onLike={action('like')}/>
)

export const Liked = () => (
    <Pin data={{...fakeData, liked: true}} onOpen={action('open')} onLike={action('like')}/>
)


