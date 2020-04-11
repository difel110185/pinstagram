import React, {useState} from 'react'
import 'gestalt/dist/gestalt.css'
import {Box, Text, Image, IconButton, Heading, Mask, Button, Touchable} from "gestalt"

function Pin(props) {
    const [showLayer, setShowLayer] = useState(false);

    return (
        <Box maxWidth={"220pt"} color={"lightGray"} rounding={2}>
            <Touchable onMouseEnter={() => setShowLayer(true)} onMouseLeave={() => setShowLayer(false)}>
                <Box rounding={2} padding={2}>
                    <Box position="relative">
                        <Mask rounding={2}>
                            <Image alt={props.data.title} src={props.data.image} naturalHeight={props.data.height} naturalWidth={props.data.width}/>
                        </Mask>
                        {showLayer && (
                            <Box position="absolute" padding={2} bottom left>
                                <Button bgColor="white" text="Open" onClick={props.data.open} />
                            </Box>
                        )}
                        {showLayer && (
                            <Box position="absolute" padding={2} bottom right>
                                <IconButton accessibilityLabel="Love" bgColor="white" icon="heart" iconColor={ props.data.liked ? "red" : "gray"} onClick={props.onLike} />
                            </Box>
                        )}
                    </Box>
                    <Box>
                        <Heading size={"lg"}>{props.data.title}</Heading>
                    </Box>
                    <Box>
                        <Text size={"md"}>{props.data.author}</Text>
                    </Box>
                </Box>
            </Touchable>
        </Box>
    )
}

export default Pin
