import React, { useState } from 'react';
import { Link as routerLink } from 'react-router-dom';

import {
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  HStack,
  IconButton,
  Flex,
  Text,
  Icon,
  Link,
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

import { FaBars, FaTimes } from 'react-icons/fa';
import Category from './Category';

const DrawerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <FaBars onMouseOver={onOpen} size={28} />
      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <Link as={routerLink} to={'/'} style={{ textDecoration: 'none' }}>
            <DrawerHeader
              justifyContent="center"
              fontSize="3rem"
              fontFamily="heading"
            >
              Pretty Petals
              <IconButton
                icon={<FaTimes />}
                variant="ghost"
                position="absolute"
                right="0"
                onClick={onClose}
                mt="20px"
              />
            </DrawerHeader>
          </Link>
          <DrawerBody>
            <Flex>
              <Text
                fontSize="19px"
                ml="25px"
                color="gray.500"
                fontFamily="text"
              >
                Scrunchies
              </Text>

              <Text fontSize="lg" ml="240px" color="gray.500" fontFamily="text">
                Totebags
              </Text>
            </Flex>
            <Category onClose={onClose} />

            <Link
              as={routerLink}
              to={'/login'}
              fontSize="24px"
              position="absolute"
              mt="20px"
              ml="193px"
              borderBottom="1px solid gray"
              fontFamily="text"
              style={{ textDecoration: 'none' }}
            >
              Login
            </Link>
            <HStack position="absolute" mt="80px" ml="180px">
              <a
                href="https://instagram.com/prettypetalsbyet?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon
                  width="24px"
                  height="24px"
                  as={FaFacebook}
                  role="https://chakra-ui.com/docs/components/icon/usage"
                />
              </a>
              <a
                ml="70px"
                href="https://instagram.com/prettypetalsbyet?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noreferrer noopener"
              >
                {' '}
                <Icon width="24px" height="24px" as={FaInstagram} />
              </a>

              <a
                href="https://instagram.com/prettypetalsbyet?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noreferrer noopener"
              >
                {' '}
                <Icon width="24px" height="24px" as={FaTwitter} />
              </a>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
