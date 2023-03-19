import React from 'react';
import { FaBars, FaShoppingBag } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import {
  Stack,
  HStack,
  VStack,
  Link,
  Flex,
  Spacer,
  Box,
} from '@chakra-ui/react';
import Search from './Search';
import DrawerMenu from './DrawerMenu';
const Navbar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      {location.pathname !== '/' && (
        <Box className="nav-width" pt="10px" bg="pretty.50">
          <Flex gap={5}>
            <DrawerMenu />

            <Spacer />
            <Search />
            <Link mt={2}>Login</Link>
            <Box mt={1}>
              <FaShoppingBag size={28} />
            </Box>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default Navbar;
