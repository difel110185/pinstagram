import React from 'react'
import SearchBar from './index'
import { action } from '@storybook/addon-actions';

export default {
    title: 'SearchBar',
    component: SearchBar,
}

export const Default = () => (
    <SearchBar placeholder={"Search and explore"} />
)
