import * as React from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen ({navigation}) {
    return(
        <View>
            <Text
            onPress={() => alert('This is the "Home" screen.')}
            style={{fontSize:26,fontWeight:'bold'}}
            >HomeScreen</Text>
        </View>
    )
}