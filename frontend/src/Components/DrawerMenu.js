import React, { useState } from 'react';
import {
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  Radio,
  RadioGroup,
  Button,
  HStack,
  IconButton,
  Flex,
  Spacer,
  Text,
  VStack,
  Link,
  Icon,
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

import { FaBars, FaTimes } from 'react-icons/fa';
import SideMenu from './SideMenu';

const DrawerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <FaBars onMouseOver={onOpen} size={28} />
      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader justifyContent="center">
            Pretty Petals
            <IconButton
              icon={<FaTimes />}
              variant="ghost"
              position="absolute"
              right="0"
              onClick={onClose}
            />
          </DrawerHeader>
          <DrawerBody>
            <Flex justify="space-between">
              <Text border="2px solid red" fontSize="lg">
                Scrunchies
              </Text>

              <Text border="2px solid red" fontSize="lg">
                Totebags
              </Text>
            </Flex>
            <SideMenu />

            <Link variant="brandPrimary" mt={2}>
              Login
            </Link>
            <HStack>
              <a
                href="https://instagram.com/prettypetalsbyet?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon
                  as={FaFacebook}
                  role="https://chakra-ui.com/docs/components/icon/usage"
                />
              </a>
              <a
                href="https://instagram.com/prettypetalsbyet?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noreferrer noopener"
              >
                {' '}
                <Icon as={FaInstagram} />
              </a>

              <a
                href="https://instagram.com/prettypetalsbyet?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noreferrer noopener"
              >
                {' '}
                <Icon as={FaTwitter} />
              </a>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
