import React from 'react'
import { render } from '@testing-library/react'
import NavBar from './index'

test('Renders Home link when LoggedIn', () => {
    let { queryByText } = render(<NavBar loggedIn={true} />)
    let home = queryByText("Home")
    expect(home).toBeInTheDocument()
})

test('Renders Liked link when LoggedIn', () => {
    let { queryByText } = render(<NavBar loggedIn={true} />)
    let liked = queryByText("Liked")
    expect(liked).toBeInTheDocument()
})

test('Renders Log Out link when LoggedIn', () => {
    let { queryByText } = render(<NavBar loggedIn={true} />)
    let logout = queryByText("Log Out")
    expect(logout).toBeInTheDocument()
})

test('Renders searchbar link when LoggedIn', () => {
    let { queryByPlaceholderText } = render(<NavBar loggedIn={true} />)
    let ph = queryByPlaceholderText("Search and explore")
    expect(ph).toBeInTheDocument()
})

test('Renders Home link when LoggedOut', () => {
    let { queryByText } = render(<NavBar loggedIn={false} />)
    let home = queryByText("Home")
    expect(home).toBeInTheDocument()
})

test('Renders Sign Up link when LoggedOut', () => {
    let { queryByText } = render(<NavBar loggedIn={false} />)
    let liked = queryByText("Sign Up")
    expect(liked).toBeInTheDocument()
})

test('Renders Log In link when LoggedOut', () => {
    let { queryByText } = render(<NavBar loggedIn={false} />)
    let logout = queryByText("Log In")
    expect(logout).toBeInTheDocument()
})

test('Renders searchbar link when LoggedOut', () => {
    let { queryByPlaceholderText } = render(<NavBar loggedIn={false} />)
    let ph = queryByPlaceholderText("Search and explore")
    expect(ph).toBeInTheDocument()
})
