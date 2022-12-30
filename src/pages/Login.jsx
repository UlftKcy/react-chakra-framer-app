import { Box, Button, Center, Container, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input, Link, SimpleGrid, Stack, Switch, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link as ReachLink } from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleInputChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const isErrorEmail = email === '';
    const isErrorPassword = password === '';

    return (
        <Container>
            <Box mb={8}>
                <Heading>Nice to see you!</Heading>
                <Text>Enter your email and password to login</Text>
            </Box>
            <VStack spacing={5}>
                <FormControl isInvalid={isErrorEmail}>
                    <FormLabel>Email</FormLabel>
                    <Input rounded="3xl" py={6} type='email' value={email} onChange={handleInputChange} />
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
                    <Input rounded="3xl" py={6} type='password' value={password} onChange={handlePasswordChange} />
                    {!isErrorPassword ? (
                        <FormHelperText>
                            Enter the password.
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage>Email is password.</FormErrorMessage>
                    )}
                </FormControl>
                <FormControl as={SimpleGrid} display="flex" alignItems="center">
                    <Switch id='isChecked' mr={3} />
                    <FormLabel htmlFor='isChecked' mb={0}>Remember me</FormLabel>
                </FormControl>
                <FormControl>
                    <Button w="100%" colorScheme='teal' variant='solid'>
                        Login
                    </Button>
                </FormControl>
                <Box display="flex" alignItems="center"><Text mr={3}>Don't have an account?</Text><Link fontSize="lg" fontWeight="extrabold" as={ReachLink} to="#">Sign Up</Link></Box>
            </VStack>
        </Container>
    )
}

export default Login
