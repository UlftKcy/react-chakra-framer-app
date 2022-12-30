import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleInputChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const isErrorEmail = email === '';
    const isErrorPassword = password === '';

    return (
        <VStack>
            <FormControl isInvalid={isErrorEmail}>
                <FormLabel>Email</FormLabel>
                <Input type='email' value={email} onChange={handleInputChange} />
                {!isErrorEmail ? (
                    <FormHelperText>
                        Enter the email you'd like to receive the newsletter on.
                    </FormHelperText>
                ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                )}
            </FormControl>
            <FormControl isInvalid={isErrorPassword}>
                <FormLabel>Password</FormLabel>
                <Input type='passwrod' value={password} onChange={handlePasswordChange} />
                {!isErrorPassword ? (
                    <FormHelperText>
                        Enter the password.
                    </FormHelperText>
                ) : (
                    <FormErrorMessage>Email is password.</FormErrorMessage>
                )}
            </FormControl>
        </VStack>
    )
}

export default Login
