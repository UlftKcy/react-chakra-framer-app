import { Card, CardBody, GridItem } from '@chakra-ui/react'
import React, { Fragment } from 'react'
import BarChart from './charts/BarChart'
import SimpleLineChart from './charts/SimpleLineChart'

const Statistic = () => {
    return (
        <Fragment>
            <GridItem colSpan={2} borderRadius="lg" h="300px" bg='whiteAlpha.700'>
                <Card w='100%' h="100%">
                    <CardBody>
                        <SimpleLineChart />
                    </CardBody>
                </Card>
            </GridItem>
            <GridItem colSpan={2} borderRadius="lg" h="300px" bg='whiteAlpha.700'>
                <Card w='100%' h="100%">
                    <CardBody>
                        <BarChart/>
                    </CardBody>
                </Card>
            </GridItem>
        </Fragment>
    )
}

export default Statistic