import React from 'react'
import PinDetails from './index'
import { action } from '@storybook/addon-actions';

const fakeData = {
    "title": "The Big Day",
    "author": "Chance the Rapper",
    "description": "The Big Day is the debut studio album by American rapper Chance the Rapper, released on July 26, 2019. The album follows several mixtapes by the rapper including the reissue of his collaborative Merry Christmas Lil' Mama in 2017, and is his first solo project since Coloring Book in 2016.",
    "image": "https://media.pitchfork.com/photos/5d3f963c87626200084cdaa0/1:1/w_600/Chance-The-Rapper-The-Big-Day-1564418470-640x640.jpg",
    "height": 600,
    "width": 600
}

export default {
    title: 'Pin Details',
    component: PinDetails,
}

export const Default = () => (
    <PinDetails data={{...fakeData, liked: false}} onDismiss={action('dismiss')} onLike={action('like')}/>
)

export const Liked = () => (
    <PinDetails data={{...fakeData, liked: true}} onDismiss={action('dismiss')} onLike={action('like')}/>
)
