import React, { useState, useEffect } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/login/Background'
import Header from '../components/login/Header'
import Button from '../components/login/Button'
import TextInput from '../components/login/TextInput'
import { theme } from '../core/theme'
import { emailValidator } from '../helper/emailValidator'
import { passwordValidator } from '../helper/passwordValidator'
import { auth } from '../firebase'



export default function Login({ navigation }) {
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("MainContainer")
            }
        })

        return unsubscribe
    }, [])


    const onLoginPressed = () => {
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        if (emailError || passwordError) {
            setEmail({ ...email, error: emailError })
            setPassword({ ...password, error: passwordError })
            return
        } else {
            handleLogin(email.value, password.value)
        }
        // navigation.reset({
        //     index: 0,
        //     routes: [{ name: 'Home' }],
        // })
    }

    const handleLogin = (email, password) => {
        let submitEmail = email.toString();
        let submitPassword = password.toString();
        auth
            .signInWithEmailAndPassword(submitEmail, submitPassword)
            .then(userCredentials => {
                const user = userCredentials.user;
            })
            .catch(error => alert(error.message));
    }

    return (
        <Background>
            <Header>Sign in to BidenEats</Header>
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
            <View style={styles.forgotPassword}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Auth', { screen: 'ResetPassword' })}
                >
                    <Text style={styles.forgot}>Forgot your password?</Text>
                </TouchableOpacity>
            </View>
            <Button mode="contained" onPress={onLoginPressed}>
                Login
            </Button>
            <View style={styles.row}>
                <Text>Don’t have an account? </Text>
                <TouchableOpacity onPress={() => navigation.replace('Register')}>
                    <Text style={styles.link}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    forgot: {
        fontSize: 13,
        color: 'blue',
    },
    link: {
        fontWeight: 'bold',
        color: 'blue',
    },
})
