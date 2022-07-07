import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'

import Background from '../components/login/Background'
import Header from '../components/login/Header'
import Button from '../components/login/Button'
import TextInput from '../components/login/TextInput'
import BackButton from '../components/register/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helper/emailValidator'
import { passwordValidator } from '../helper/passwordValidator'
import { nameValidator } from '../helper/nameValidator'
import { auth } from '../firebase'


export default function Register({ navigation }) {
    // const [name, setName] = useState({ value: '', error: '' })
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })


    const onSignUpPressed = () => {
        // const nameError = nameValidator(name.value)
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        if (emailError || passwordError) {
            // setName({ ...name, error: nameError })
            setEmail({ ...email, error: emailError })
            setPassword({ ...password, error: passwordError })
            return
        } else {
            handleRegister(email.value, password.value)
            navigation.navigate('Auth', { screen: 'Login' })
        }

        // navigation.reset({
        //     index: 0,
        //     routes: [{ name: 'Dashboard' }],
        // })
    }

    const handleRegister = (email, password) => {
        let submitEmail = email.toString();
        let submitPassword = password.toString();
        auth
            .createUserWithEmailAndPassword(submitEmail, submitPassword)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log("Register Success" + user.email + user.password);
            })
            .catch(error => alert(error.message));
    }

    return (
        <Background>
            {/* <BackButton goBack={navigation.goBack} /> */}

            <Header>Create an account</Header>
            {/* <TextInput
                label="Name"
                returnKeyType="next"
                value={name.value}
                onChangeText={(text) => setName({ value: text, error: '' })}
                error={!!name.error}
                errorText={name.error}
            /> */}
            <TextInput
                label="Email"
                returnKeyType="next"
                value={email.value}
                onChangeText={(text) => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />
            <TextInput
                label="Password"
                returnKeyType="done"
                value={password.value}
                onChangeText={(text) => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
            />
            <Button
                mode="contained"
                onPress={onSignUpPressed}
                style={{ marginTop: 24 }}
            >
                Sign Up
            </Button>
            <View style={styles.row}>
                <Text>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.link}>Login</Text>
                </TouchableOpacity>
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
})
