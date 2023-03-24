import { Link } from '@chakra-ui/react';
import React from 'react';
import { Link as ReachLink } from 'react-router-dom';

const ScrunchieSubCategory = ({ onClose }) => {
  return (
    <div>
      <Link
        as={ReachLink}
        to="/casual"
        fontFamily="text"
        onClick={onClose}
        style={{ textDecoration: 'none' }}
      >
        Casual Scrunchie
      </Link>
      <br />
      <Link
        as={ReachLink}
        to="/patchWork"
        fontFamily="text"
        onClick={onClose}
        style={{ textDecoration: 'none' }}
      >
        Patchwork Scrunchie
      </Link>
      <br />

      <Link
        as={ReachLink}
        to="/cotton"
        fontFamily="text"
        onClick={onClose}
        style={{ textDecoration: 'none' }}
      >
        Cotton Scrunchie
      </Link>
      <br />

      <Link
        as={ReachLink}
        to="/slip"
        fontFamily="text"
        onClick={onClose}
        style={{ textDecoration: 'none' }}
      >
        Slip Scrunchie
      </Link>
      <br />

      <Link
        as={ReachLink}
        to="/silk"
        fontFamily="text"
        onClick={onClose}
        style={{ textDecoration: 'none' }}
      >
        Silk Scrunchie
      </Link>
      <br />

      <Link
        as={ReachLink}
        to="/organza"
        fontFamily="text"
        onClick={onClose}
        style={{ textDecoration: 'none' }}
      >
        Organza Scrunchie
      </Link>
      <br />

      <Link
        as={ReachLink}
        to="/velvet"
        fontFamily="text"
        onClick={onClose}
        style={{ textDecoration: 'none' }}
      >
        Velvet Scrunchie
      </Link>
      <br />

      <Link
        as={ReachLink}
        to="/bow"
        fontFamily="text"
        onClick={onClose}
        style={{ textDecoration: 'none' }}
      >
        Bow Scrunchie
      </Link>
    </div>
  );
};

export default ScrunchieSubCategory;
