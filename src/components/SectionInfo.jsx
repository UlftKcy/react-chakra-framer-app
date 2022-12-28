import { ArrowForwardIcon, ChevronDownIcon, ViewIcon } from '@chakra-ui/icons'
import { Box, Button, Card, CardBody, CardFooter, CardHeader, CircularProgress, CircularProgressLabel, Flex, Grid, GridItem, Heading, Icon, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const SectionInfo = () => (
    <Grid templateColumns="repeat(4,1fr)" gap={6} h="300px">
        <GridItem colSpan={2} borderRadius="lg">
            <Card w='100%' h="100%" bgGradient='linear(to-r, blue.800, blue.500)'>
                <CardBody>
                    <Stack spacing={8}>
                        <Box>
                            <Text size="sm" color="whiteAlpha.800">Welcome,</Text>
                            <Heading size="lg" color="white">Mark Johnson</Heading>
                        </Box>
                        <Box>
                            <Text color="whiteAlpha.700">Glad to see you again! <br /> Ask me anything.</Text>
                        </Box>
                    </Stack>
                </CardBody>
                <CardFooter>
                    <Button size="sm" color="white" variant="link">Tap to record <Icon ml={2}><ArrowForwardIcon /></Icon></Button>
                </CardFooter>
            </Card>
        </GridItem>
        <GridItem borderRadius="lg">
            <Card w='100%' h="100%" bgGradient='linear(to-r, blue.800, blue.500)'>
                <CardHeader>
                    <Box>
                        <Heading size="sm" color="white">Satisfaction Rate</Heading>
                        <Text fontSize="xs" color="whiteAlpha.700">From all projects</Text>
                    </Box>
                </CardHeader>
                <CardBody pos="relative" display="flex" justifyContent="center">
                    <Box display="flex" justifyContent="center">
                        <CircularProgress value={80} size="180px" thickness="8px" trackColor='blue.600' color='teal.400'>
                            <CircularProgressLabel><Icon><ViewIcon color="teal.400" /></Icon></CircularProgressLabel>
                        </CircularProgress>
                    </Box>
                    <Flex boxShadow="md" rounded="md" pos="absolute" bottom="3" justifyContent="space-between" w="75%" bg="blue.800" color="white" p="4">
                        <Box><Text fontSize="xs">0%</Text></Box>
                        <Box textAlign="center"><Text fontSize="lg" fontWeight="bold">80%</Text><Text fontSize="xs" opacity="0.7">Based on likes</Text></Box>
                        <Box><Text fontSize="xs">100%</Text></Box>
                    </Flex>
                </CardBody>
            </Card>
        </GridItem>
        <GridItem borderRadius="lg">
            <Card w='100%' h="100%" bgGradient='linear(to-r, blue.800, blue.500)'>
                <CardHeader>
                    <Box display="flex" justifyContent="space-between">
                        <Heading size="sm" color="white">Referral Tracking</Heading>
                        <Button size="sm"><Icon><ChevronDownIcon /></Icon></Button>
                    </Box>
                </CardHeader>
                <CardBody>
                    <Box display="flex" justifyContent="center">
                        <CircularProgress value={93} size="180px" thickness="8px" trackColor='blue.600' color='teal.400'>
                            <CircularProgressLabel color="white">9.3</CircularProgressLabel>
                        </CircularProgress>
                    </Box>
                    <Box textAlign="center" color="white" fontSize="sm"><Text>Total Score</Text></Box>
                </CardBody>
            </Card>
        </GridItem>
    </Grid>
)

export default SectionInfo