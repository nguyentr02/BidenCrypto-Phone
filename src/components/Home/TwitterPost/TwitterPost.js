import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Box, Button, Container, Flex } from 'native-base'
import Twitter from '../../Twitter/Twitter';

const TwitterPost = () => {
    return (
        // <Text style={styles.header_text}>
        //     Watchlist
        // </Text>


        <Flex
            alignItems="center"
            flexDirection='row'
            justifyContent="space-between"
            w='90%'
            h='20'
            mt={-2}
            // p={4}
            // borderWidth={1}
            // borderRadius={10}
            // borderColor='#CFCFCF'
        >
            <Twitter />
            <Flex
                ml={2}
                flexDirection='column'
                justifyContent="flex-start"
                flex={1}
            >
                <Text
                    style={{
                        fontWeight: '700'
                    }}>Twitter</Text>
                <Text
                    style={{
                        fontWeight: '400'
                    }}
                >EARN $3 </Text>
            </Flex>
            <Flex
                flexDirection='column'
            >
                {/* <Text
                    style={{
                        color: '#2752E7',
                        fontWeight: '700'
                    }}>Watch video</Text> */}

                    <Button
                    variant='unstyled'
                    _text={{
                        color: "#2752E7",
                        fontWeight: '700'
                    }}
                    onPress={() => console.log("bi sech")}
                    >Watch video</Button>
            </Flex>
        </Flex>
    )
}

export default TwitterPost