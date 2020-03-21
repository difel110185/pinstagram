import React from 'react'
import NavBar from './index'
import { action } from '@storybook/addon-actions';

export default {
    title: 'Nav Bar',
    component: NavBar,
}

export const LoggedIn = () => (
    <NavBar loggedIn={true} />
)

export const LoggedOut = () => (
    <NavBar loggedIn={false} />
)
