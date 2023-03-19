import { Link } from '@chakra-ui/react';
import React from 'react';
import { Link as ReachLink } from 'react-router-dom';

const ScrunchieSubCategory = ({ onClose }) => {
  return (
    <div>
      <Link as={ReachLink} to="/casual" fontFamily="text" onClick={onClose}>
        Casual Scrunchie
      </Link>
      <br />
      <Link as={ReachLink} to="/patchWork" fontFamily="text" onClick={onClose}>
        Patchwork Scrunchie
      </Link>
      <br />

      <Link as={ReachLink} to="/cotton" fontFamily="text" onClick={onClose}>
        Cotton Scrunchie
      </Link>
      <br />

      <Link as={ReachLink} to="/slip" fontFamily="text" onClick={onClose}>
        Slip Scrunchie
      </Link>
      <br />

      <Link as={ReachLink} to="/silk" fontFamily="text" onClick={onClose}>
        Silk Scrunchie
      </Link>
      <br />

      <Link as={ReachLink} to="/organza" fontFamily="text" onClick={onClose}>
        Organza Scrunchie
      </Link>
      <br />

      <Link as={ReachLink} to="/velvet" fontFamily="text" onClick={onClose}>
        Velvet Scrunchie
      </Link>
      <br />

      <Link as={ReachLink} to="/bow" fontFamily="text" onClick={onClose}>
        Bow Scrunchie
      </Link>
    </div>
  );
};

export default ScrunchieSubCategory;
