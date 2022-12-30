import { AiFillHome } from 'react-icons/ai';
import { GoProject } from 'react-icons/go';
import { BsFillBagPlusFill } from 'react-icons/bs';
import { FaMoneyCheck, FaUserCircle,FaSignInAlt,FaUserPlus} from 'react-icons/fa';
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
  ListItem,
  Stack,
  DrawerOverlay,
  useColorMode,
  Icon,
} from '@chakra-ui/react';
import { Link as ReachLink } from "react-router-dom"


const SidebarContent = ({ onClick }) => (
  <List spacing={5}>
    <ListItem w="100%" justifyContent="left" color='white' fontWeight="bold" _hover={{ "color": "teal.300" }}>
      <Icon mt={1} boxSize={6}><AiFillHome /></Icon>
      <Link as={ReachLink} to="/" onClick={onClick} _hover={{ "textDecoration": "none" }} fontSize="sm">Dashboard</Link>
    </ListItem>
    <ListItem w="100%" justifyContent="left" color='white' fontWeight="bold" _hover={{ "color": "teal.300" }}>
      <Icon mt={1} boxSize={6}><GoProject /></Icon>
      <Link onClick={onClick} _hover={{ "textDecoration": "none" }} fontSize="sm">Projects</Link>
    </ListItem>
    <ListItem w="100%" justifyContent="left" color='white' fontWeight="bold" _hover={{ "color": "teal.300" }}>
      <Icon mt={1} boxSize={6}><BsFillBagPlusFill /></Icon>
      <Link onClick={onClick} _hover={{ "textDecoration": "none" }} fontSize="sm">Orders</Link>
    </ListItem>
    <ListItem w="100%" justifyContent="left" color='white' fontWeight="bold" _hover={{ "color": "teal.300" }}>
      <Icon mt={1} boxSize={6}><FaMoneyCheck /></Icon>
      <Link onClick={onClick} _hover={{ "textDecoration": "none" }} fontSize="sm">Billing</Link>
    </ListItem>
  </List>
);

const AccountPages = ({ onClick }) => (
  <>
    <Box>
      <Heading fontSize='14' color='teal.300' textTransform="uppercase">
        Account Pages
      </Heading>
    </Box>
    <List spacing={5}>
      <ListItem w="100%" justifyContent="left" color='white' fontWeight="bold" _hover={{ "color": "teal.300" }}>
        <Icon mt={1} boxSize={6}><FaUserCircle /></Icon>
        <Link onClick={onClick} _hover={{ "textDecoration": "none" }} fontSize="sm">Profile</Link>
      </ListItem>
      <ListItem w="100%" justifyContent="left" color='white' fontWeight="bold" _hover={{ "color": "teal.300" }}>
        <Icon mt={1} boxSize={6}><FaSignInAlt /></Icon>
        <Link as={ReachLink} to="/login" onClick={onClick} _hover={{ "textDecoration": "none" }} fontSize="sm">Login</Link>
      </ListItem>
      <ListItem w="100%" justifyContent="left" color='white' fontWeight="bold" _hover={{ "color": "teal.300" }}>
        <Icon mt={1} boxSize={6}><FaUserPlus /></Icon>
        <Link onClick={onClick} _hover={{ "textDecoration": "none" }} fontSize="sm">Sign Up</Link>
      </ListItem>
    </List>
  </>
);

const Sidebar = ({ isOpen, variant, onClose }) => {
  const { colorMode } = useColorMode();
  return variant === 'sidebar' ? (
    <Box
      position="fixed"
      left={0}
      py={6}
      px={4}
      w="200px"
      top={0}
      h="100%"
      bgGradient={colorMode === "light" ? 'linear(to-r, blue.900, blue.600)' : ""}
    >
      <Box>
        <Heading size='md' color='white' textAlign="center">
          <Link as={ReachLink} to="/" _hover={{ "textDecoration": "none", "opacity": "0.8" }}>Chakra App</Link>
        </Heading>
      </Box>
      <Divider my="5" />
      <Stack spacing={7} pl={6}>
        <SidebarContent onClick={onClose} />
        <AccountPages onClick={onClose} />
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
            <Stack spacing={7} pl={6}>
              <SidebarContent onClick={onClose} />
              <AccountPages onClick={onClose} />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

export default Sidebar
