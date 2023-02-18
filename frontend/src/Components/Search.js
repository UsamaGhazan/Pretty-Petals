import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Stack,
  HStack,
  VStack,
  Button,
  Flex,
  Box,
} from '@chakra-ui/react';
import '@fontsource/source-sans-pro/200.css';
const Search = () => {
  return (
    <HStack>
      <FormControl display="inline">
        <Input type="text" size="sm" width="200px" mr="2" mt="1" />
        <Button size="sm" fontFamily="Source Sans Pro">
          Search
        </Button>
      </FormControl>
    </HStack>
  );
};

export default Search;
