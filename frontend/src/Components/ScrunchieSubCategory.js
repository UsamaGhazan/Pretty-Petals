import { Link } from '@chakra-ui/react';
import React from 'react';
import { Link as ReachLink } from 'react-router-dom';

const ScrunchieSubCategory = () => {
  return (
    <div>
      <Link as={ReachLink} to="/Casual" fontFamily="text">
        Casual Scrunchie
      </Link>
      <br />
      <Link as={ReachLink} to="/PatchWork" fontFamily="text">
        Patchwork Scrunchie
      </Link>
      <br />

      <Link as={ReachLink} to="/Cotton" fontFamily="text">
        Cotton Scrunchie
      </Link>
      <br />

      <Link as={ReachLink} to="/Slip" fontFamily="text">
        Slip Scrunchie
      </Link>
      <br />

      <Link as={ReachLink} to="/Silk" fontFamily="text">
        Silk Scrunchie
      </Link>
      <br />

      <Link as={ReachLink} to="/Organza" fontFamily="text">
        Organza Scrunchie
      </Link>
      <br />

      <Link as={ReachLink} to="/Velvet" fontFamily="text">
        Velvet Scrunchie
      </Link>
      <br />

      <Link as={ReachLink} to="/Bow" fontFamily="text">
        Bow Scrunchie
      </Link>
    </div>
  );
};

export default ScrunchieSubCategory;
