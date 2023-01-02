import { AiFillHome } from 'react-icons/ai';
import { GoProject } from 'react-icons/go';
import { BsFillBagPlusFill } from 'react-icons/bs';
import { FaMoneyCheck, FaUserCircle, FaSignInAlt } from 'react-icons/fa';
import {
  Box,
  Drawer,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  Heading,
  Link,
  Divider,
  List,
  Stack,
  DrawerOverlay,
  useColorMode,
  Icon,
  Text,
} from '@chakra-ui/react';
import { Link as ReachLink, NavLink } from "react-router-dom";

const SidebarContent = ({ onClick }) => (
  <List spacing={5}>
    <Link as={NavLink} to="/dashboard" _activeLink={{ bg: "blue.800" }} display="flex" alignItems="center" rounded="md" py={1} pr={6} pl={2} onClick={onClick} _hover={{ "textDecoration": "none", "bg": "blue.800" }} fontSize="sm">
      <Icon mt={2} boxSize={6}><AiFillHome /></Icon>
      <Text>Dashboard</Text>
    </Link>
    <Link as={NavLink} display="flex" alignItems="center" rounded="md" py={1} pr={6} pl={2} onClick={onClick} _hover={{ "textDecoration": "none", "bg": "blue.800" }} fontSize="sm">
      <Icon mt={2} boxSize={6}><GoProject /></Icon>
      <Text>Projects</Text>
    </Link>
    <Link as={NavLink} display="flex" alignItems="center" rounded="md" py={1} pr={6} pl={2} onClick={onClick} _hover={{ "textDecoration": "none", "bg": "blue.800" }} fontSize="sm">
      <Icon mt={2} boxSize={6}><BsFillBagPlusFill /></Icon>
      <Text>Orders</Text>
    </Link>
    <Link as={NavLink} display="flex" alignItems="center" rounded="md" py={1} pr={6} pl={2} onClick={onClick} _hover={{ "textDecoration": "none", "bg": "blue.800" }} fontSize="sm">
      <Icon mt={2} boxSize={6}><FaMoneyCheck /></Icon>
      <Text>Billing</Text>
    </Link>

  </List>
);

const AccountPages = ({ onClose }) => {
  const handleLogout = () => {
    localStorage.removeItem("user");
  }
  return (
    <>
      <Box>
        <Heading fontSize='14' color='teal.300' textTransform="uppercase">
          Account Pages
        </Heading>
      </Box>
      <List spacing={5}>
        <Link as={NavLink} display="flex" alignItems="center" rounded="md" py={1} pr={6} pl={2} onClick={onClose} _hover={{ "textDecoration": "none", "bg": "blue.800" }} fontSize="sm">
          <Icon mt={2} boxSize={6}><FaUserCircle /></Icon>
          <Text>Profile</Text>
        </Link>
        <Link as={NavLink} to="/login" display="flex" alignItems="center" rounded="md" py={1} pr={6} pl={2} onClick={handleLogout} _hover={{ "textDecoration": "none", "bg": "blue.800" }} fontSize="sm">
          <Icon mt={2} boxSize={6}><FaSignInAlt /></Icon>
          <Text>Log Out</Text>
        </Link>
      </List>
    </>
  );
}

const Sidebar = ({ isOpen, variant, onClose }) => {
  const { colorMode } = useColorMode();
  return variant === 'sidebar' ? (
    <Box
      position="fixed"
      left={0}
      p={6}
      w="240px"
      top={0}
      h="100%"
      bgGradient={colorMode === "light" ? 'linear(to-r, blue.900, blue.600)' : ""}
      boxShadow="2xl"
    >
      <Box>
        <Heading size='md' color='white' textAlign="center">
          <Link as={ReachLink} to="/" _hover={{ "textDecoration": "none", "opacity": "0.8" }}>Chakra App</Link>
        </Heading>
      </Box>
      <Divider my="5" />
      <Stack spacing={7}>
        <SidebarContent onClose={onClose} />
        <AccountPages onClose={onClose} />
      </Stack>
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
      <DrawerOverlay>
        <DrawerContent bgGradient={colorMode === "light" ? 'linear(to-r, blue.900, blue.600)' : ""}>
          <DrawerCloseButton color="white" mt="1" />
          <DrawerHeader size='md' color='teal.300'>
            <Link as={ReachLink} to="/" _hover={{ "textDecoration": "none", "color": "teal.400" }}>Chakra App</Link>
          </DrawerHeader>
          <Divider mb="5" />
          <DrawerBody>
            <Stack spacing={7}>
              <SidebarContent onClose={onClose} />
              <AccountPages onClose={onClose} />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

export default Sidebar
