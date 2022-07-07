import React, { useState } from "react";
import Background from "../components/login/Background";
// import BackButton from "../../components/BackButton";

import Header from "../components/login/Header";
import TextInput from "../components/login/TextInput";
import Button from "../components/login/Button";
import { emailValidator } from "../helper/emailValidator";
import { auth } from "../firebase";

export default function ResetPassword({ navigation }) {
    const [email, setEmail] = useState({ value: "", error: "" });

    const sendResetPasswordEmail = () => {
        const emailError = emailValidator(email.value);
        if (emailError) {
            setEmail({ ...email, error: emailError });
            return;
        } else {
            handleResetPassword(email.value);
            alert("Email already sent to " + email.value);
            navigation.navigate('Auth', { screen: 'Login' })
        }
    };

    const handleResetPassword = (email) => {
        let submitEmail = email.toString();
        auth.sendPasswordResetEmail(submitEmail).catch(error => alert(error.message));
    }

    return (
        <Background>
            <Header>Restore password</Header>
            <TextInput
                label="E-mail address"
                returnKeyType="done"
                value={email.value}
                onChangeText={(text) => setEmail({ value: text, error: "" })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
                description="You will receive email with password reset link."
            />
            <Button
                mode="contained"
                onPress={sendResetPasswordEmail}
                style={{ marginTop: 16 }}
            >
                Send Instructions
            </Button>
        </Background>
    );
}
