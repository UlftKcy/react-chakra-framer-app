import {
    Box,
    Button,
    Drawer,
    DrawerOverlay,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    DrawerContent,
    VStack,
  } from '@chakra-ui/react'
  
  
  const SidebarContent = ({ onClick }) => (
    <VStack>
      <Button onClick={onClick} w="100%" colorScheme="whiteAlpha">
        Home
      </Button>
      <Button onClick={onClick} w="100%" colorScheme="whiteAlpha">
        About
      </Button>
      <Button onClick={onClick} w="100%" colorScheme="whiteAlpha">
        Contact
      </Button>
    </VStack>
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
          bgGradient='linear(to-r, blue.800, blue.700)'
        >
          <SidebarContent onClick={onClose} />
        </Box>
      ) : (
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Chakra-UI</DrawerHeader>
              <DrawerBody>
                <SidebarContent onClick={onClose} />
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      )
  }
  
  export default Sidebar
  