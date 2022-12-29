import { GridItem } from '@chakra-ui/react';
import { Fragment } from 'react';
import Orders from './Orders';
import Projects from './Projects';

const ProjectsOrders = () => {
    return (
        <Fragment>
            <GridItem colSpan={2} borderRadius="lg">
                <Projects />
            </GridItem>
            <GridItem colSpan={2} borderRadius="lg">
                <Orders />
            </GridItem>
        </Fragment>
    )
};

export default ProjectsOrders;