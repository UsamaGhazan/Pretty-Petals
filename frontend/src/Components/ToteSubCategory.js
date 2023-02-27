import { Link } from '@chakra-ui/react';
import React from 'react';
import { Link as ReachLink } from 'react-router-dom';

const ToteSubCategory = () => {
  return (
    <div>
      <Link as={ReachLink} to="/CasualTote" fontFamily="text">
        Casual Totes
      </Link>
      <br />
      <Link as={ReachLink} to="/Embroidered" fontFamily="text">
        Embroidered Totes
      </Link>
      <br />

      <Link as={ReachLink} to="/Handpainted" fontFamily="text">
        Hand Painted Totes
      </Link>
      <br />

      <Link as={ReachLink} to="/Bling" fontFamily="text">
        The Bling Totes
      </Link>
    </div>
  );
};
export default ToteSubCategory;
