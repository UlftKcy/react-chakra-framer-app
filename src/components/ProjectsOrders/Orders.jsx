import { AddIcon, ArrowUpDownIcon, CalendarIcon, RepeatIcon } from '@chakra-ui/icons';
import { Box, Card, CardBody, CardHeader, Heading, List, ListItem, Text } from '@chakra-ui/react';

const Orders = () => {
    return (
        <Card w='100%' h="100%" px={3}>
            <CardHeader>
                <Heading size="md" color="teal.500">Orders overview</Heading>
            </CardHeader>
            <CardBody>
                <List spacing={10}>
                    <Box display="flex">
                        <RepeatIcon color='yellow.400' boxSize={4} mr={3} />
                        <ListItem>
                            $2400, Design changes
                            <Text fontSize="13" opacity="0.8">22 DEC 7:20 PM</Text>
                        </ListItem>
                    </Box>
                    <Box display="flex">
                        <ArrowUpDownIcon color='green.400' boxSize={4} mr={3} />
                        <ListItem>
                            New order #4219423
                            <Text fontSize="13" opacity="0.8">21 DEC 3:10 PM</Text>
                        </ListItem>
                    </Box>
                    <Box display="flex">
                        <CalendarIcon color='purple.400' boxSize={4} mr={3} />
                        <ListItem>
                            Server Payments for April
                            <Text fontSize="13" opacity="0.8">20 DEC 2:20 PM</Text>
                        </ListItem>
                    </Box>
                    <Box display="flex">
                        <AddIcon color='cyan.400' boxSize={4} mr={3} />
                        <ListItem>
                            New card added for order #3210145
                            <Text fontSize="13" opacity="0.8">19 DEC 10:00 AM</Text>
                        </ListItem>
                    </Box>
                </List>
            </CardBody>
        </Card>
    )
}

export default Orders