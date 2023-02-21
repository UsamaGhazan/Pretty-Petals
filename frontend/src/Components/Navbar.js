import React from 'react';
import { FaBars, FaShoppingBag } from 'react-icons/fa';
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
  return (
    <>
      <Box className="nav-width" pt="10px">
        <Flex gap={5}>
          <DrawerMenu />

          <Spacer />
          <Search />
          <Link variant="brandPrimary" mt={2}>
            Login
          </Link>
          <Box mt={1}>
            <FaShoppingBag size={28} />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
