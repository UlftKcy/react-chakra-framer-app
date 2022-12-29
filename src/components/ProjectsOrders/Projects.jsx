import { Card, CardBody, CardHeader, Heading, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

const Projects = () => {
  return (
    <Card w='100%' h="100%" color="white" bgGradient='linear(to-r, blue.900, blue.600)'>
            <CardHeader>
                <Heading size="md">Projects</Heading>
            </CardHeader>
            <CardBody>
                <TableContainer>
                    <Table variant='simple' size="lg">
                        <TableCaption color="whiteAlpha.600">Imperial to metric conversion factors</TableCaption>
                        <Thead>
                            <Tr>
                                <Th color="whiteAlpha.700">To convert</Th>
                                <Th color="whiteAlpha.700">into</Th>
                                <Th color="whiteAlpha.700" isNumeric>multiply by</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>inches</Td>
                                <Td>millimetres (mm)</Td>
                                <Td isNumeric>25.4</Td>
                            </Tr>
                            <Tr>
                                <Td>feet</Td>
                                <Td>centimetres (cm)</Td>
                                <Td isNumeric>30.48</Td>
                            </Tr>
                            <Tr>
                                <Td>yards</Td>
                                <Td>metres (m)</Td>
                                <Td isNumeric>0.91444</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </CardBody>
        </Card>
  )
}

export default Projects