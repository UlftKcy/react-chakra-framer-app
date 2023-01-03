import { ArrowForwardIcon, ChevronDownIcon, ViewIcon } from '@chakra-ui/icons'
import { Box, Button, Card, CardBody, CardFooter, CardHeader, CircularProgress, CircularProgressLabel, Flex, GridItem, Heading, Icon, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from '@chakra-ui/react'
import React, { Fragment } from 'react'

const SectionInfo = () => {
    return (
        <Fragment>
            <GridItem colSpan={{ base: "2", md: "2", lg: "2" }} borderRadius="lg" bg='whiteAlpha.700'>
                <Card w='100%' h="100%">
                    <CardBody>
                        <Stack spacing={8}>
                            <Box>
                                <Text size="sm" color="gray.500">Welcome,</Text>
                                <Heading size="lg" color="teal.500">Username</Heading>
                            </Box>
                            <Box>
                                <Text color="gray.500">Glad to see you again! <br /> Ask me anything.</Text>
                            </Box>
                        </Stack>
                    </CardBody>
                    <CardFooter>
                        <Button size="sm" color="blue.400" variant="link">Tap to record <Icon ml={2}><ArrowForwardIcon /></Icon></Button>
                    </CardFooter>
                </Card>
            </GridItem>
            <GridItem colSpan={{ base: "2", md: "1", lg: "1" }} borderRadius="lg" bg='whiteAlpha.700'>
                <Card w='100%' h="100%">
                    <CardHeader>
                        <Box>
                            <Heading size="sm" color="teal.500">Satisfaction Rate</Heading>
                            <Text fontSize="xs" color="gray.500">From all projects</Text>
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
            <GridItem colSpan={{ base: "2", md: "1", lg: "1" }} borderRadius="lg" bg='whiteAlpha.700'>
                <Card w='100%' h="100%">
                    <CardHeader>
                        <Box display="flex" justifyContent="space-between">
                            <Heading size="sm" color="teal.500">Referral Tracking</Heading>
                            <Menu>
                                {({ isOpen }) => (
                                    <>
                                         <MenuButton variant="outline" color="gray.500" _hover={{bg:"whiteAlpha.200"}} _active={{bg:"whiteAlpha.400"}} size="sm" isActive={isOpen} as={Button}><ChevronDownIcon /></MenuButton>
                                        <MenuList>
                                            <MenuItem>Download</MenuItem>
                                            <MenuItem onClick={() => alert('Kagebunshin')}>Create a Copy</MenuItem>
                                        </MenuList>
                                    </>
                                )}
                            </Menu>
                        </Box>
                    </CardHeader>
                    <CardBody>
                        <Box display="flex" justifyContent="center">
                            <CircularProgress value={93} size="180px" thickness="8px" trackColor='blue.600' color='teal.400'>
                                <CircularProgressLabel color="teal.400">9.3</CircularProgressLabel>
                            </CircularProgress>
                        </Box>
                        <Box textAlign="center" color="gray.500" fontSize="sm"><Text>Total Score</Text></Box>
                    </CardBody>
                </Card>
            </GridItem>
        </Fragment>
    )
}

export default SectionInfo;