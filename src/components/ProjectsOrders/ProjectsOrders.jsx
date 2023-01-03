import { GridItem } from '@chakra-ui/react';
import { Fragment } from 'react';
import Orders from './Orders';
import Projects from './Projects';

const ProjectsOrders = () => {
    return (
        <Fragment>
            <GridItem colSpan={2} borderRadius="lg" bg='whiteAlpha.700'>
                <Projects />
            </GridItem>
            <GridItem colSpan={2} borderRadius="lg" bg='whiteAlpha.700'>
                <Orders />
            </GridItem>
        </Fragment>
    )
};

export default ProjectsOrders;