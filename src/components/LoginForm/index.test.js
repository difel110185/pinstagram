import React from 'react'
import { render } from '@testing-library/react'
import LoginForm from "./index";

const pageTitle = "Login/Sign Up";
const userNamePlaceholder = "Email";
const passwordPlaceholder = "Password";
const loginButtonText = "Login";
const signUpButtonText = "Sign Up";

test('Renders the title', () => {
    let { queryByText } = render(<LoginForm />)
    let title = queryByText(pageTitle)
    expect(title).toBeInTheDocument()
})

test('Renders the username placeholder', () => {
    let { queryByPlaceholderText } = render(<LoginForm />)
    let ph = queryByPlaceholderText(userNamePlaceholder)
    expect(ph).toBeInTheDocument()
})

test('Renders the password placeholder', () => {
    let { queryByPlaceholderText } = render(<LoginForm />)
    let ph = queryByPlaceholderText(passwordPlaceholder)
    expect(ph).toBeInTheDocument()
})

test('Renders the Login button', () => {
    let { queryByText } = render(<LoginForm />)
    let buttonText = queryByText(loginButtonText)
    expect(buttonText).toBeInTheDocument()
})

test('Renders the Sign Up button', () => {
    let { queryByText } = render(<LoginForm />)
    let buttonText = queryByText(signUpButtonText)
    expect(buttonText).toBeInTheDocument()
})
