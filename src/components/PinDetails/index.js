import React from 'react'
import 'gestalt/dist/gestalt.css'
import { Box, Text, Modal, Image, IconButton } from "gestalt"

function PinDetails(props) {
    return (
        <Modal
            accessibilityCloseLabel="close"
            accessibilityModalLabel="Details about the pin"
            heading={props.data.title}
            onDismiss={props.onDismiss}
        >
            <Box
                position="relative"
            >
                <Image
                    alt={props.data.title}
                    src={props.data.image}
                    naturalHeight={props.data.height}
                    naturalWidth={props.data.width}
                />
                <Box
                    position="absolute"
                    padding={2}
                    bottom
                    right
                >
                    <IconButton
                        accessibilityLabel="Love"
                        bgColor="white"
                        icon="heart"
                        iconColor={ props.data.liked ? "red" : "gray"}
                        onClick={props.onLike}
                    />
                </Box>
            </Box>
            <Box padding={2}>
                <Text>
                    {props.data.author}
                </Text>
            </Box>
            <Box padding={2}>
                <Text>
                    {props.data.description}
                </Text>
            </Box>
        </Modal>
    )
}

export default PinDetails
