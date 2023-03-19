import { Link } from '@chakra-ui/react';
import React from 'react';
import { Link as ReachLink } from 'react-router-dom';

const ToteSubCategory = ({ onClose }) => {
  return (
    <div>
      <Link as={ReachLink} to="/CasualTote" fontFamily="text" onClick={onClose}>
        Casual Totes
      </Link>
      <br />
      <Link
        as={ReachLink}
        to="/Embroidered"
        fontFamily="text"
        onClick={onClose}
      >
        Embroidered Totes
      </Link>
      <br />

      <Link
        as={ReachLink}
        to="/Handpainted"
        fontFamily="text"
        onClick={onClose}
      >
        Hand Painted Totes
      </Link>
      <br />

      <Link as={ReachLink} to="/Bling" fontFamily="text" onClick={onClose}>
        The Bling Totes
      </Link>
    </div>
  );
};
export default ToteSubCategory;
