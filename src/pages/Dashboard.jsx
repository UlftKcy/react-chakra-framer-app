import { Box, Grid, Heading, useBreakpointValue } from '@chakra-ui/react';
import React, { Fragment } from 'react'
import Header from '../components/Header';
import ProjectsOrders from '../components/ProjectsOrders/ProjectsOrders';
import SectionInfo from '../components/SectionInfo';
import Statistic from '../components/Statistic';

const Dashboard = () => {
    const variants = useBreakpointValue({ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' });
    return (
        <Fragment>
            <Box mb={5}>
                <Heading size='md'>Dashboard</Heading>
            </Box>
            <Grid templateColumns={variants} gap={6}>
                <Header />
                <SectionInfo />
                <Statistic />
                <ProjectsOrders />
            </Grid>
        </Fragment>
    )
}

export default Dashboard;