import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
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
    <Box bg="pretty.50">
      <VStack
        align="flex-start"
        w="full"
        h="full"
        className="max-width"
        bg="pretty.50"
      >
        <Heading m="auto" mt="50px">
          Causal Scrunchie
        </Heading>
        <Grid templateColumns="repeat(4,1fr)" gap="6" mt="30x">
          {loading ? (
            <Spinner margin="auto" />
          ) : (
            products
              .filter(product => {
                return product.subCat === 'CASUAL';
              })
              .map(product => {
                return (
                  <GridItem key={product._id}>
                    <Card maxW="sm">
                      <CardBody>
                        <Image
                          src={product.image}
                          alt={product.description}
                          borderRadius="lg"
                        />
                        <Stack mt="6" spacing="3">
                          <Heading size="md">{product.name}</Heading>
                          <Text>
                            {' '}
                            This sofa is perfect for modern tropical spaces,
                            baroque inspired spaces, earthy toned spaces and for
                            people who love a chic design with a sprinkle of
                            vintage design.
                          </Text>

                          <Text color="blue.600" fontSize="2xl">
                            $450
                          </Text>
                        </Stack>
                      </CardBody>
                      <Divider />
                      <CardFooter>
                        <ButtonGroup spacing="2">
                          <Button variant="solid" colorScheme="blue">
                            Buy now
                          </Button>
                          <Button variant="ghost" colorScheme="blue">
                            Add to cart
                          </Button>
                        </ButtonGroup>
                      </CardFooter>
                    </Card>
                  </GridItem>
                );
              })
          )}
        </Grid>
      </VStack>
    </Box>
  );
};

export default CasualScreen;
