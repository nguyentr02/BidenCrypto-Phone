import * as React from 'react';
import { Text, StyleSheet, useWindowDimensions, View } from 'react-native';
import { Box, Button, ScrollView, VStack, Divider, Flex, Center, theme, Image } from "native-base";
// import { Image, SvgCssUri } from 'react-native-svg';
import { HStack } from "native-base";
import Bitcoin from '../../components/Bitcoin/Bitcoin';


export default function SettingsScreen ({navigation}) {
    const { height, width } = useWindowDimensions();
    return(
        <ScrollView
        maxW={height} h="80" _contentContainerStyle={{
            // minW: "72",
            // flex: '1',
            paddingTop: '16',
            paddingLeft: '6',
            paddingRight: '7',
            backgroundColor: '#fff',
            showsHorizontalScrollIndicator: false,
            showsVerticalScrollIndicator: false,
        }}>
            <Text style={{
                color: 'grey',
                fontSize: 15,
                zIndex: 1,
            }}>Gmail</Text>
            <Text style={{
                color: 'black',
                fontSize: 27,
                zIndex: 1,
                marginBottom: 28,
                fontWeight: '600',
            }}>Name</Text>
            <HStack 
            space={2}
            borderWidth={1}
            borderColor='lightgrey'
            borderRadius={20}
            marginBottom = '8'
            >
                <Text style={{
                    fontSize: 21,
                    width: "55%",
                    margin: 23,
                }}
                >Share your love of crypto and get $5 of free BTC</Text>                

                <Bitcoin style = {{
                    height: "100%",
                    width: "55%",
                    marginTop: 46,
                    marginLeft: 30,
                }}/>
            </HStack>
            <Text 
                style = {{
                    fontSize: 28,
                    marginBottom: 16,
                    fontWeight: '600',
                }}
            >Payment Methods</Text>
            <Flex
                alignItems="center"
                borderWidth={1}
                borderColor='lightgrey'
                borderRadius={17}
                marginBottom = '9'
            >
                <Text style= {{
                    fontSize: 21,
                    fontWeight: '500',
                    marginBottom: 20,
                    marginTop: 20,
                }}
                >Add a payment method</Text>
            </Flex>
            <Text 
            style={{
                fontSize: 27,
                fontWeight: '600',
                marginBottom: 20,
            }}
            >Account</Text>
            <Flex
                flexDirection = 'row'
                marginBottom={6}
            >
                <Text style={{
                    fontSize: 20,
                }}
                >Limits and features</Text>
                <Image 
                    size={5}
                    marginLeft='160'
                    source={require('../../assets/forward_arrow.png')}
                />
            </Flex>

            <Flex
                flexDirection = 'row'
                marginBottom={6}
            >
                <Text style={{
                    fontSize: 20,
                }}
                >Native currency</Text>
                <Image 
                    size={5}
                    marginLeft='188'
                    source={require('../../assets/forward_arrow.png')}
                />            
            </Flex>

            <Flex
                flexDirection = 'row'
                marginBottom={6}
            >
                <Text style={{
                    fontSize: 20,
                }}
                >Country</Text>
                <Image 
                    size={5}
                    marginLeft='254'
                    source={require('../../assets/forward_arrow.png')}
                />
            </Flex>

            <Flex
                flexDirection = 'row'
                marginBottom={9}
            >
                <Text style={{
                    fontSize: 20,
                }}
                >Privacy</Text>
                <Image 
                    size={5}
                    marginLeft='259'
                    source={require('../../assets/forward_arrow.png')}
                />
            </Flex>
            

            <Text 
            style={{
                fontSize: 27,
                fontWeight: '600',
                marginBottom: 14,
            }}
            >Security</Text>
            <Flex
                flexDirection = 'row'
                marginBottom={8}
            >
                <Text style={{
                    fontSize: 20,
                    marginTop: 26,
                }}
                >Require PIN / Face ID</Text>
                <Image
                    size={20}
                    marginLeft='100'
                    marginTop='0'
                    source={require('../../assets/switch.png')}
                /> 
            </Flex>

            <Flex
                flexDirection = 'row'
                marginBottom={6}
            >
                <Text style={{
                    fontSize: 20,
                }}
                >PIN / Face ID settings</Text>
                <Image 
                    size={5}
                    marginLeft='136'
                    source={require('../../assets/forward_arrow.png')}
                />
            </Flex>

            <Flex
                flexDirection = 'row'
                marginBottom={6}
            >
                <Flex
                    flexDirection='column'
                >
                    <Text style={{
                        fontSize: 20,
                    }}
                    >Privacy mode</Text>
                    
                    <Text style={{
                        fontSize: 16,
                        color: 'grey',
                        width: '40%',
                    }}
                    >Long press on your portfolio balance to hide your balances everywhere in the app</Text>
                </Flex>
                
                {/* Day ne thang lon */}
                
                {/* <Image
                    width={3}
                    marginLeft='1'
                    source={require('../../assets/switch.png')}
                />  */}
            </Flex>

            <Flex
                flexDirection = 'row'
                marginBottom={6}
            >
                <Text style={{
                    fontSize: 20,
                }}
                >Support</Text>
                <Image 
                    size={5}
                    marginLeft='249'
                    source={require('../../assets/forward_arrow.png')}
                />
            </Flex>

            <Button 
                _text={{
                    color: "#fc002c",
                }}
            >Sign out</Button>
        </ScrollView>
    )
}