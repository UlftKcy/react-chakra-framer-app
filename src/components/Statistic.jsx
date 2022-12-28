import { Card, CardBody, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import BarChart from './charts/BarChart'
import SimpleLineChart from './charts/SimpleLineChart'

const Statistic = () => {
    return (
        <Grid templateColumns="repeat(4,1fr)" gap={6} h="300px">
            <GridItem colSpan={2} borderRadius="lg">
                <Card w='100%' h="100%" bgGradient='linear(to-r, blue.800, blue.500)'>
                    <CardBody>
                        <SimpleLineChart />
                    </CardBody>
                </Card>
            </GridItem>
            <GridItem colSpan={2} borderRadius="lg">
                <Card w='100%' h="100%" bgGradient='linear(to-r, blue.800, blue.500)'>
                    <CardBody>
                        <BarChart/>
                    </CardBody>
                </Card>
            </GridItem>
        </Grid>
    )
}

export default Statistic