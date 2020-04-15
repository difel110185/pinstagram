import React, {useState} from 'react'
import 'gestalt/dist/gestalt.css'
import {Box, TextField, Modal, Image, IconButton, Button} from "gestalt"
import {login, signUp} from '../../networkManager';

function LoginForm(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const doLogin = () => {
        login(email, password).then((response) => {
            localStorage.setItem('token', response.data.accessToken)

            props.login(email)
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const doSignUp = () => {
        signUp(email, password).then((response) => {
            localStorage.setItem('token', response.data.accessToken)

            props.login(email)
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <Modal accessibilityCloseLabel="close" accessibilityModalLabel="Login form" heading={"Login/Sign Up"} onDismiss={props.dismiss}>
            <Box position="relative" padding={2}>
                <TextField id="email" onChange={({value}) => setEmail(value)} placeholder="Email" value={email} type="email" />
            </Box>
            <Box position="relative" padding={2}>
                <TextField id="password" onChange={({value}) => setPassword(value)} placeholder="Password" value={password} type="password" />
            </Box>
            <Box position="relative" padding={2}>
                <Box display={"inlineBlock"} marginRight={4}>
                    <Button text={"Login"} inline={true} onClick={doLogin} />
                </Box>
                <Box display={"inlineBlock"}>
                    <Button text={"Sign Up"} inline={true} onClick={doSignUp} />
                </Box>
            </Box>
        </Modal>
    )
}

export default LoginForm
