import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icons from '../../components/Icons/Icons';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Icons style={styles.image} />
            <Text
                style={styles.header_text}
            >Welcome to BidenCrypto!</Text>
            <Text
                styles={styles.sub_header_text}
            >Make your first investment today</Text>
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
        fontSize: 26,
        fontWeight: 'bold'
    },
    sub_header_text: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '707070',
    }
});