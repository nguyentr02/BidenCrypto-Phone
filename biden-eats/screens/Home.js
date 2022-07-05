import { StyleSheet, StatusBar, View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'

export default function Home() {
    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <HeaderTabs />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    AndroidSafeArea: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
});