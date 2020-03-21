import React from 'react'
import 'gestalt/dist/gestalt.css'
import {Masonry, Heading, Box, Text} from "gestalt"
import Pin from "../Pin";

function PinMasonry(props) {
    if (props.pins.length === 0)
        return (
            <Box width={"100%"}>
                <Text align={"center"} size={"lg"}>There are 0 results.</Text>
            </Box>
        )

    return (
        <Masonry comp={Pin} items={props.pins} />
    )
}

export default PinMasonry
