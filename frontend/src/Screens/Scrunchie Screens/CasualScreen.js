import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, Flex, Heading, Spinner, Grid, GridItem } from '@chakra-ui/react';
import { listProducts } from '../../features/productFeatures/productListSlice';

const CasualScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector(store => store.productList);
  const { loading, products, error } = productList;
  console.log(products);

  useEffect(() => {
    console.log('Use effect is running');
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <section>
      <Box className="max-width">
        <Flex>
          <Heading m="auto" mt="50px">
            Causal Scrunchies
          </Heading>
          <Grid templateColumns="repeat(5,1fr)" gap="6"></Grid>
        </Flex>
      </Box>
    </section>
  );
};

export default CasualScreen;
