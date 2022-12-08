import { FaAddressBook } from 'react-icons/fa';
import { Box } from './Box';
import { Button } from './Buttom';

export const App = () => {
  return (
    <Box
    as="main">
      <Box 
      as="header"
      bg="isOfflineText"
      colors="labelBgColor"
      pt={5}
      pb={5}
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderColor="isOffline"
      position="relative"
      >
      <Button icon={FaAddressBook}>Super button</Button>
    </Box>
    <Box
    as="section"
    bg="isOnlineText"
      colors="labelBgColor"
      pt={5}
      pb={5}
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderColor="isOffline"
      position="relative"
    >
    <Button icon={FaAddressBook} >Super button</Button>
    </Box>
    </Box>
  );
};
