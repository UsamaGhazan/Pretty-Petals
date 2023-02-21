import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  Link,
  Icon,
} from '@chakra-ui/react';

import React from 'react';
import SubCategory from './SubCategory';

const Category = () => {
  return (
    <>
      <Accordion allowToggle fontFamily="text">
        <AccordionItem borderTop="none" p="15px 20px">
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontSize="24px">
                The Scrunchie Collection
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <SubCategory />
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem p="15px 20px">
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontSize="24px">
                The Totebags Collection
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <SubCategory />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Category;
