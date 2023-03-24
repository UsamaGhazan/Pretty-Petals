import React from 'react';
import { Box, Divider, Flex, Heading, HStack, Text } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
const Footer = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && (
        <Box bg="#013220">
          <footer className="max-width">
            <Text>Pretty Petals By ET</Text>
            <HStack spacing="150px" mt="20px">
              <Heading>Contact</Heading>
              <Box>
                <Box fontSize="25px">Location</Box>
                <Box>Rawalpindi</Box>
              </Box>
              <Box>
                <Box fontSize="25px">Email Address</Box>
                <Box>prettypetalsbyte@gmail.com</Box>
              </Box>
              <Box>
                <Box fontSize="25px">Phone Number</Box>
                <Box>+92 333 5710521</Box>
              </Box>
            </HStack>
          </footer>
        </Box>
      )}
    </>
  );
};

export default Footer;
