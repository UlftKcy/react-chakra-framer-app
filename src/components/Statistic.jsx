import { Card, CardBody, GridItem } from '@chakra-ui/react'
import React, { Fragment } from 'react'
import BarChart from './charts/BarChart'
import SimpleLineChart from './charts/SimpleLineChart'

const Statistic = () => {
    return (
        <Fragment>
            <GridItem colSpan={2} borderRadius="lg" h="300px">
                <Card w='100%' h="100%" bgGradient='linear(to-r, blue.900, blue.600)'>
                    <CardBody>
                        <SimpleLineChart />
                    </CardBody>
                </Card>
            </GridItem>
            <GridItem colSpan={2} borderRadius="lg" h="300px">
                <Card w='100%' h="100%" bgGradient='linear(to-r, blue.900, blue.600)'>
                    <CardBody>
                        <BarChart/>
                    </CardBody>
                </Card>
            </GridItem>
        </Fragment>
    )
}

export default Statistic