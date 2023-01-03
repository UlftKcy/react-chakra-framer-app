import { CheckIcon, PlusSquareIcon, RepeatClockIcon, TimeIcon } from '@chakra-ui/icons';
import { Box, Card, CardBody, Flex, GridItem, Icon, Stat, StatArrow, StatGroup, StatLabel, StatNumber, Text } from '@chakra-ui/react';
import { Fragment } from 'react';

const Header = () => {
    return (
        <Fragment>
            <GridItem colSpan={{ base: "2", md: "1", lg: "1" }} bg='whiteAlpha.700' borderRadius="lg">
                <Card w='100%' h="100%">
                    <CardBody>
                        <Flex alignItems="center" justifyContent="space-between">
                            <Box>
                                <StatGroup>
                                    <Stat>
                                        <StatLabel>Today's Money</StatLabel>
                                        <StatNumber display="flex" alignItems="center">
                                            $53,000
                                            <Text fontSize="xs" color="gray.500" mb="0" ml="2">
                                                <StatArrow type='increase' />
                                                53.36%
                                            </Text>
                                        </StatNumber>
                                    </Stat>
                                </StatGroup>
                            </Box>
                            <Icon backgroundColor="teal.500" borderRadius="md" color="white" w="10" h="10" p="2">
                                <TimeIcon />
                            </Icon>
                        </Flex>
                    </CardBody>
                </Card>
            </GridItem>
            <GridItem colSpan={{ base: "2", md: "1", lg: "1" }} bg='whiteAlpha.700' borderRadius="lg">
                <Card w='100%' h="100%">
                    <CardBody>
                        <Flex alignItems="center" justifyContent="space-between">
                            <Box>
                                <StatGroup>
                                    <Stat>
                                        <StatLabel>Today's User</StatLabel>
                                        <StatNumber display="flex" alignItems="center">
                                            2,300
                                            <Text fontSize="xs" color="gray.500" mb="0" ml="2">
                                                <StatArrow type='increase' />
                                                5%
                                            </Text>
                                        </StatNumber>
                                    </Stat>
                                </StatGroup>
                            </Box>
                            <Icon backgroundColor="teal.500" borderRadius="md" color="white" w="10" h="10" p="2">
                                <PlusSquareIcon />
                            </Icon>
                        </Flex>
                    </CardBody>
                </Card>
            </GridItem>
            <GridItem colSpan={{ base: "2", md: "1", lg: "1" }} bg='whiteAlpha.700' borderRadius="lg">
                <Card w='100%' h="100%">
                    <CardBody>
                        <Flex alignItems="center" justifyContent="space-between">
                            <Box>
                                <StatGroup>
                                    <Stat>
                                        <StatLabel>New Clients</StatLabel>
                                        <StatNumber display="flex" alignItems="center">
                                            +3,030
                                            <Text fontSize="xs" color="gray.500" mb="0" ml="2">
                                                <StatArrow type='decrease' />
                                                -14%
                                            </Text>
                                        </StatNumber>
                                    </Stat>
                                </StatGroup>
                            </Box>
                            <Icon backgroundColor="teal.500" borderRadius="md" color="white" w="10" h="10" p="2">
                                <RepeatClockIcon />
                            </Icon>
                        </Flex>
                    </CardBody>
                </Card>
            </GridItem>
            <GridItem colSpan={{ base: "2", md: "1", lg: "1" }} bg='whiteAlpha.700' borderRadius="lg">
                <Card w='100%' h="100%">
                    <CardBody>
                        <Flex alignItems="center" justifyContent="space-between">
                            <Box>
                                <StatGroup>
                                    <Stat>
                                        <StatLabel>Total Sales</StatLabel>
                                        <StatNumber display="flex" alignItems="center">
                                            $155,000
                                            <Text fontSize="xs" color="gray.500" mb="0" ml="2">
                                                <StatArrow type='increase' />
                                                8%
                                            </Text>
                                        </StatNumber>
                                    </Stat>
                                </StatGroup>
                            </Box>
                            <Icon backgroundColor="teal.500" borderRadius="md" color="white" w="10" h="10" p="2">
                                <CheckIcon />
                            </Icon>
                        </Flex>
                    </CardBody>
                </Card>
            </GridItem>
        </Fragment>
    )
}

export default Header;