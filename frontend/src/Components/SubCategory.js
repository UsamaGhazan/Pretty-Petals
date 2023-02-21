import { Link } from '@chakra-ui/react';
import React from 'react';
import { Link as ReachLink } from 'react-router-dom';

const SubCategory = () => {
  return (
    <div>
      <Link as={ReachLink} to="/PatchWork">
        Patchwork Scrunchie
      </Link>
    </div>
  );
};

export default SubCategory;
