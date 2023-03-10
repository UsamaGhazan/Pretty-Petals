import React, { useEffect } from 'react';
import {
  Stack,
  HStack,
  VStack,
  Box,
  Flex,
  Spacer,
  Heading,
  Text,
} from '@chakra-ui/react';
import Navbar from '../Components/Navbar';
import Search from '../Components/Search';
const HomeScreen = () => {
  useEffect(() => {
    console.log('Use effect is running');
  });
  return (
    <div>
      <section className="homeSection">
        <Navbar />
        <Box className="max-width">
          <Flex alignItems="center" justifyContent="center" height="600px">
            <Heading
              fontSize="200px"
              position={'absolute'}
              left="150px"
              top="100px"
              color="white"
              fontWeight="light"
            >
              Prett{' '}
            </Heading>
            <Spacer />

            <Heading
              fontSize="200px"
              position={'absolute'}
              right="150px"
              bottom="120px"
              color="white"
              fontWeight="light"
            >
              Petals{' '}
            </Heading>
          </Flex>
          <Box border="3px solid white" width="230px" margin="auto">
            <Text color="white" height="55px" padding="16px" ml="40px">
              BY EMAN TARIQ
            </Text>
          </Box>
        </Box>
      </section>
    </div>
  );
};

export default HomeScreen;
