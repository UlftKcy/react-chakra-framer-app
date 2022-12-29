import { ArrowRightIcon } from '@chakra-ui/icons'
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
} from '@chakra-ui/react'


const SidebarContent = ({ onClick }) => (
  <List spacing={5}>
    <ListItem w="100%" justifyContent="left" color='white' fontWeight="bold" _hover={{ "color": "teal.300" }}>
      <ArrowRightIcon mr={3} boxSize={2.5} />
      <Link onClick={onClick} _hover={{ "textDecoration": "none" }} fontSize="sm">Dashboard</Link>
    </ListItem>
    <ListItem w="100%" justifyContent="left" color='white' fontWeight="bold" _hover={{ "color": "teal.300" }}>
      <ArrowRightIcon mr={3} boxSize={2.5} />
      <Link onClick={onClick} _hover={{ "textDecoration": "none" }} fontSize="sm">Tables</Link>
    </ListItem>
    <ListItem w="100%" justifyContent="left" color='white' fontWeight="bold" _hover={{ "color": "teal.300" }}>
      <ArrowRightIcon mr={3} boxSize={2.5} />
      <Link onClick={onClick} _hover={{ "textDecoration": "none" }} fontSize="sm">Billing</Link>
    </ListItem>
    <ListItem w="100%" justifyContent="left" color='white' fontWeight="bold" _hover={{ "color": "teal.300" }}>
      <ArrowRightIcon mr={3} boxSize={2.5} />
      <Link onClick={onClick} _hover={{ "textDecoration": "none" }} fontSize="sm">RTL</Link>
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
        <ArrowRightIcon mr={3} boxSize={2.5} />
        <Link onClick={onClick} _hover={{ "textDecoration": "none" }} fontSize="sm">Profile</Link>
      </ListItem>
      <ListItem w="100%" justifyContent="left" color='white' fontWeight="bold" _hover={{ "color": "teal.300" }}>
        <ArrowRightIcon mr={3} boxSize={2.5} />
        <Link onClick={onClick} _hover={{ "textDecoration": "none" }} fontSize="sm">Login</Link>
      </ListItem>
      <ListItem w="100%" justifyContent="left" color='white' fontWeight="bold" _hover={{ "color": "teal.300" }}>
        <ArrowRightIcon mr={3} boxSize={2.5} />
        <Link onClick={onClick} _hover={{ "textDecoration": "none" }} fontSize="sm">Sign Up</Link>
      </ListItem>
    </List>
  </>
)

const Sidebar = ({ isOpen, variant, onClose }) => {
  return variant === 'sidebar' ? (
    <Box
      position="fixed"
      left={0}
      p={5}
      w="200px"
      top={0}
      h="100%"
      bgGradient='linear(to-r, blue.900, blue.600)'
    >
      <Box>
        <Heading size='md' color='white' textAlign="center">
          <Link href='#' _hover={{ "textDecoration": "none", "opacity": "0.8" }}>Chakra App</Link>
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
        <DrawerContent bgGradient='linear(to-r, blue.900, blue.600)'>
          <DrawerCloseButton color="white" mt="1" />
          <DrawerHeader size='md' color='teal.300'>
            <Link href='#' _hover={{ "textDecoration": "none", "color": "teal.400" }}>Chakra App</Link>
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
