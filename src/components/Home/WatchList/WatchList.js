import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Box, Container, Flex } from 'native-base'
import Bitcoin from '../../Bitcoin/Bitcoin';

const WatchList = () => {
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
            p={4}
            borderWidth={2}
            borderRadius={10}
            borderColor='CFCFCF'
        >
            <Bitcoin/>
            <Flex
                ml={2}
                flexDirection='column'
                flex={1}
            >
                <Text>Bitcoin</Text>
                <Text>BTC</Text>
            </Flex>
            <Flex
                flexDirection='column'

            >
                <Text>$38,650</Text>
                <Text>+3.88%</Text>
            </Flex>
        </Flex>
    )
}

export default WatchList