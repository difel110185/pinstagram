import React from 'react'
import 'gestalt/dist/gestalt.css'
import { Box, Icon, IconButton, Link, Text } from "gestalt"
import SearchBar from "../SearchBar";

function NavBar(props) {
    return (
        <Box color="white" rounding={2} padding={3} display="flex" direction="row" alignItems="center">
            <Box padding={3}>
                {(props.loggedIn &&
                    <IconButton accessibilityLabel="Person" bgColor="white" icon="person" iconColor="gray" onClick={() => { console.log("person")}}/>
                )}
                {(!props.loggedIn &&
                    <IconButton accessibilityLabel="Star" bgColor="white" icon="star" iconColor="gray" onClick={() => { console.log("star")}}/>
                )}
            </Box>
            <Box flex="grow" paddingX={2}>
                <SearchBar placeholder={"Search and explore"} onChange={props.onSearch} />
            </Box>
            <Box paddingX={2}>
                <Link href="#">
                    <Text weight="bold" color={"gray"}>Home</Text>
                </Link>
            </Box>
            {(props.loggedIn &&
                <Box paddingX={2}>
                    <Link href="#">
                        <Text weight="bold" color={"gray"}>Liked</Text>
                    </Link>
                </Box>
            )}
            {(props.loggedIn &&
                <Box paddingX={2}>
                    <Link href="#">
                        <Text weight="bold" color={"gray"}>Log Out</Text>
                    </Link>
                </Box>
            )}
            {(!props.loggedIn &&
                <Box paddingX={2}>
                    <Link href="#">
                        <Text weight="bold" color={"gray"}>Sign Up</Text>
                    </Link>
                </Box>
            )}
            {(!props.loggedIn &&
                <Box paddingX={2}>
                    <Link href="#">
                        <Text weight="bold" color={"gray"}>Log In</Text>
                    </Link>
                </Box>
            )}
        </Box>
    )
}

export default NavBar
