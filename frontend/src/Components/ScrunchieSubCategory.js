import { Link } from '@chakra-ui/react';
import React from 'react';
import { Link as ReachLink } from 'react-router-dom';

const ScrunchieSubCategory = () => {
  return (
    <div>
      <Link as={ReachLink} to="/casual" fontFamily="text">
        Casual Scrunchie
      </Link>
      <br />
      <Link as={ReachLink} to="/patchWork" fontFamily="text">
        Patchwork Scrunchie
      </Link>
      <br />

      <Link as={ReachLink} to="/cotton" fontFamily="text">
        Cotton Scrunchie
      </Link>
      <br />

      <Link as={ReachLink} to="/slip" fontFamily="text">
        Slip Scrunchie
      </Link>
      <br />

      <Link as={ReachLink} to="/silk" fontFamily="text">
        Silk Scrunchie
      </Link>
      <br />

      <Link as={ReachLink} to="/organza" fontFamily="text">
        Organza Scrunchie
      </Link>
      <br />

      <Link as={ReachLink} to="/velvet" fontFamily="text">
        Velvet Scrunchie
      </Link>
      <br />

      <Link as={ReachLink} to="/bow" fontFamily="text">
        Bow Scrunchie
      </Link>
    </div>
  );
};

export default ScrunchieSubCategory;
