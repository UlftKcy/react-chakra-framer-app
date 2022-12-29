import { GridItem } from '@chakra-ui/react';
import { Fragment } from 'react';
import Orders from './Orders';
import Projects from './Projects';

const ProjectsOrders = () => {
    return (
        <Fragment>
            <GridItem colSpan={2} borderRadius="lg" bgGradient='linear(to-r, blue.900, blue.600)'>
                <Projects />
            </GridItem>
            <GridItem colSpan={2} borderRadius="lg" bgGradient='linear(to-r, blue.900, blue.600)'>
                <Orders />
            </GridItem>
        </Fragment>
    )
};

export default ProjectsOrders;