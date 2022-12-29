import { Box, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';

const mdVariant = { navigation: 'drawer', navigationButton: true };
const lgVariant = { navigation: 'sidebar', navigationButton: false };

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const variants = useBreakpointValue({ base: mdVariant, md: mdVariant, lg: lgVariant });

  return (
    <div className="App">
      <Sidebar variant={variants?.navigation} isOpen={isOpen} onClose={onClose}/>
      <Box ml={!variants?.navigationButton && 200}>
        <Navbar showSidebarButton={variants?.navigationButton} onShowSidebar={onOpen} />
        <Dashboard />
      </Box>
    </div>
  );
}
export default App;
