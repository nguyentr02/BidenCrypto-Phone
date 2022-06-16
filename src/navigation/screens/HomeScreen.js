import * as React from 'react';
import { Text, StyleSheet, useWindowDimensions, View } from 'react-native';
import { Box, Button, ScrollView, VStack, Divider, Flex, Center } from "native-base";
import { SvgCssUri } from 'react-native-svg';
import WatchList from '../../components/Home/WatchList/WatchList';
import Carousel from '../../components/Carousel/Carousel';
import HeaderImage from '../../components/Home/HeaderImage/HeaderImage';
import TwitterPost from '../../components/Home/TwitterPost/TwitterPost';
import BlockchainCarousel from '../../components/Home/BlockchainCarousel/BlockchainCarousel';
import Currency from '../../components/Home/Currency/Currency';
import Wallet from '../../components/Home/Wallet/Wallet';

export default function HomeScreen({ navigation }) {
    const { height, width } = useWindowDimensions();

    return (
        <ScrollView
            maxW={height} h="80" _contentContainerStyle={{
                // minW: "72",
                // flex: '1',
                paddingTop: '10',
                backgroundColor: '#fff',
                alignItems: 'center',
                showsHorizontalScrollIndicator: false,
                showsVerticalScrollIndicator: false,
            }}>
            <HeaderImage style={styles.header_image} />
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
                    onPress={() => console.log("con cac")}
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
            <Carousel />

            <Box
                mt="5"
                w="90%"
                h="8"
                alignItems="flex-start">
                <Text style={styles.header_text}
                >Learn about Twitter</Text>
            </Box>
            <TwitterPost />

            <Box
                mt="5"
                w="90%"
                h="8"
                alignItems="flex-start">
                <Text style={styles.blockchain_header}
                >Building an internet of blockchains</Text>
            </Box>
            <BlockchainCarousel />

            <Box
                mt="5"
                w="90%"
                h="8"
                alignItems="flex-start">
                <Text style={styles.header_text}
                >Rewards</Text>
            </Box>


            <Text style={{
                color: 'red',
                fontSize: 16,
                zIndex: 1,
            }}>Discover ways to earn crypto</Text>
            <Text style={{
                color: 'red',
                fontSize: 24,
                zIndex: 1,
            }}>Start earning</Text>

            <Flex
                flexDirection='row'
                alignItems='flex-start'
            >
                <Button
                    // ml={3}
                    mt={10}
                    zIndex={9}
                    variant='unstyled'
                    // startIcon={<ArrowRight />}
                    onPress={() => console.log("nham nut roi thang ngu")}
                >
                    hehe
                </Button>
            </Flex>

            <Center zIndex={-1}>
                <Wallet />
            </Center>
            












        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    header_image: {
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
    },
    blockchain_header: {
        fontSize: 20,
        fontWeight: '300',
        color: '#707070',
    }
});