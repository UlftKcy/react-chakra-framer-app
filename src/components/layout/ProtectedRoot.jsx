import { Box, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import "../../App.css";
import { motion } from 'framer-motion';
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const mdVariant = { navigation: 'drawer', navigationButton: true };
const lgVariant = { navigation: 'sidebar', navigationButton: false };

function ProtectedRoot() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const variants = useBreakpointValue({ base: mdVariant, md: mdVariant, lg: lgVariant });
    const Motiondiv = motion.div;

    let current_user = JSON.parse(localStorage.getItem("user"));

    if (!current_user) { return <Navigate to="/login" /> }

    return (
        <Motiondiv className='App' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <Sidebar variant={variants?.navigation} isOpen={isOpen} onClose={onClose} />
            <Box ml={!variants?.navigationButton && 240}>
                <Navbar showSidebarButton={variants?.navigationButton} onShowSidebar={onOpen} />
                <Outlet />
            </Box>
        </Motiondiv>
    );
}
export default ProtectedRoot;
