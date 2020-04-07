import React from 'react'
import LoginForm from './index'
import { action } from '@storybook/addon-actions';

export default {
    title: 'Login Form',
    component: LoginForm,
}

export const Default = () => (
    <LoginForm />
)
