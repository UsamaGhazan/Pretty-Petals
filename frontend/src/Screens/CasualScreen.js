import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Heading,
  Spinner,
  Grid,
  GridItem,
  VStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Stack,
  Image,
  Divider,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';
import { listProducts } from '../features/productFeatures/productListSlice';

const CasualScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector(store => store.productList);
  const { loading, products, error } = productList;
  // const filteredProducts = products.filter(
  //   product => product.subCat === 'Casual'
  // );
  // console.log(filteredProducts);
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <section className="casualSection bg-main">
      <VStack align="flex-start" className="max-width">
        <Heading m="auto" mb="100px">
          Casual Scrunchie
        </Heading>
        <Grid templateColumns="repeat(4,1fr)" gap="20">
          {loading ? (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100vh"
              width="100vh"
            >
              <Spinner size="xl" />
            </Box>
          ) : (
            products
              .filter(product => {
                return product.subCat === 'CASUAL';
              })
              .map(product => {
                return (
                  <GridItem key={product._id}>
                    <Link to={`/product/${product._id}`}>
                      <Image
                        src={product.image}
                        alt={product.description}
                        width="234px"
                        height="314px"
                        border="2px solid black"
                        p="10px"
                      />
                      <Stack mt="2" spacing="3">
                        <Heading size="md" margin="auto">
                          {product.name}
                        </Heading>

                        <Text textAlign="center">Rs. {product.price}</Text>
                      </Stack>
                    </Link>

                    <Divider />
                  </GridItem>
                );
              })
          )}
        </Grid>
      </VStack>
    </section>
  );
};

export default CasualScreen;
