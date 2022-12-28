import { Box, Stack, useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import SectionInfo from './components/SectionInfo';
import Sidebar from './components/Sidebar';
import Statistic from './components/Statistic';

const smVariant = { navigation: 'drawer', navigationButton: true };
const mdVariant = { navigation: 'sidebar', navigationButton: false };

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="App">
      <Sidebar variant={variants?.navigation} isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <Box ml={!variants?.navigationButton && 200}>
        <Navbar showSidebarButton={variants?.navigationButton} onShowSidebar={toggleSidebar} />
        <Stack spacing={8}>
        <Header />
        <SectionInfo />
        <Statistic />
      </Stack>
      </Box>
    </div>
  );
}
export default App;
