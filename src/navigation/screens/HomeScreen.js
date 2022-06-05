import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Box, Button, Flex } from "native-base";
import { SvgCssUri } from 'react-native-svg';
import Icons from '../../components/Icons/Icons';
import WatchList from '../../components/Home/WatchList/WatchList';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Icons style={styles.image} />
            <Text
                style={styles.header_text}
            >Welcome to BidenCrypto!</Text>
            <Text
                style={styles.sub_header_text}>
                Make your first investment today
            </Text>
            <Box w="90%"
                h="20"
                alignItems="center">
                <Button
                    justifyContent="center"
                    mt="5"
                    bg="#5275EC"
                    w="100%"
                    h="12"
                    onPress={() => console.log("hello world")}
                >Add payment method</Button>
            </Box>

            <Box
                mt="5"
                w="90%"
                h="8"
                alignItems="flex-start">
                <Text
                    style={styles.header_text}
                >Watchlist</Text>
            </Box>

            <WatchList />

            <Box
                mt="5"
                w="90%"
                h="8"
                alignItems="flex-start">
                <Text
                    style={styles.header_text}
                >Top movers</Text>
            </Box>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    image: {
    },
    header_text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    sub_header_text: {
        fontSize: 16,
        fontWeight: '200',
        marginTop: 5,
        color: '#707070',
    },
    watchlist_header: {
        textAlign: 'left',
    }
});

export { styles }