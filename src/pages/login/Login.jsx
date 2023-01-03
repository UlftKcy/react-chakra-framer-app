import { AspectRatio, Box, Button, Container, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Hide, HStack, Input, Link, SimpleGrid, Switch, Text, VStack } from '@chakra-ui/react'
import React, { lazy, Suspense, useState } from 'react'
import { Link as ReachLink, useNavigate } from "react-router-dom";
import SkeletonComp from '../../skeleton/SkeletonComp';

const Login = () => {
    const [email, setEmail] = useState('test@test.com');
    const [password, setPassword] = useState('123456');

    const navigate = useNavigate();
    const LoginImage = lazy(() => import("./LoginImage"))

    const handleInputChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const isErrorEmail = email === '';
    const isErrorPassword = password === '';

    const handleSubmit = (e) => {
        e.preventDefault();
        let user = {
            "email": email,
            "password": password,
        };
        if (email && password) {
            localStorage.setItem("user", JSON.stringify(user));
            navigate('/');
        }
    }

    return (
        <HStack height="100vh">
            <Container>
                <Box p={10}>
                    <Box mb={8}>
                        <Heading>Nice to see you!</Heading>
                        <Text>Enter your email and password to login</Text>
                    </Box>
                    <form onSubmit={handleSubmit}>
                        <VStack spacing={5}>
                            <FormControl isInvalid={isErrorEmail}>
                                <FormLabel>Email</FormLabel>
                                <Input rounded="3xl" borderColor="gray.400" py={6} type='email' value={email} onChange={handleInputChange} />
                                {!isErrorEmail ? (
                                    <Hide below='md'>
                                        <FormHelperText pl={5}>
                                            Enter the email you'd like to receive the newsletter on.
                                        </FormHelperText>
                                    </Hide>
                                ) : (
                                    <FormErrorMessage>Email is required.</FormErrorMessage>
                                )}
                            </FormControl>
                            <FormControl isInvalid={isErrorPassword}>
                                <FormLabel>Password</FormLabel>
                                <Input rounded="3xl" borderColor="gray.400" py={6} type='password' value={password} onChange={handlePasswordChange} />
                                {!isErrorPassword ? (
                                    <Hide below='md'>
                                        <FormHelperText pl={5}>
                                            Enter the password.
                                        </FormHelperText>
                                    </Hide>
                                ) : (
                                    <FormErrorMessage>Email is password.</FormErrorMessage>
                                )}
                            </FormControl>
                            <FormControl as={SimpleGrid} display="flex" alignItems="center">
                                <Switch id='isChecked' mr={3} />
                                <FormLabel htmlFor='isChecked' mb={0}>Remember me</FormLabel>
                            </FormControl>
                            <FormControl>
                                <Button type='submit' w="100%" colorScheme='teal' variant='solid'>
                                    Login
                                </Button>
                            </FormControl>
                        </VStack>
                    </form>
                    <Box display="flex" justifyContent="center" alignItems="center" my={4}>
                        <Text mr={3}>Don't have an account?</Text>
                        <Link fontSize="lg" fontWeight="extrabold" as={ReachLink} to="#">Sign Up</Link>
                    </Box>
                </Box>
            </Container>
            <Hide below='lg'>
                <AspectRatio width="50%" height="100vh" ratio={4 / 4}>
                    <Suspense fallback={<SkeletonComp />}>
                        <LoginImage />
                    </Suspense>
                </AspectRatio>
            </Hide>
        </HStack>

    )
}

export default Login
