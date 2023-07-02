import React from "react";
import {
  Card,
  Image,
  Text,
  Stack,
  Heading,
  Box,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";

export function RecipePage({ recipe, navigateBack }) {
  return (
    <Card
      bgColor="gray.300"
      h="90vh"
      mt={10}
      ml={9}
      mr={9}
      direction={{ base: "column", sm: "row" }}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "400px" }}
        src={recipe.image}
        alt={recipe.label}
      />

      <Stack flexGrow={1}>
        <Box flexGrow={1}>
          <Heading color="gray" size="sm">
            Type of dish
          </Heading>

          <Grid templateColumns="repeat(2, 1fr)" gap={200}>
            <GridItem w="100%" h="10">
              <Text fontSize="2xl" py="2">
                {recipe.label}
              </Text>
              <Text py="1">Total cooking time: {recipe.totalTime} minutes</Text>
              <Text>Servings: {recipe.yield}</Text>
              <Text fontWeight="semibold">Ingredients</Text>
              <ul>
                {recipe.ingredientLines.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </GridItem>

            <GridItem w="100%" h="10">
              <Text
                mt="1rem"
                textAlign="center"
                borderRadius={3}
                bgColor="purple.300"
              >
                Health Labels:
              </Text>
              <ul>
                {recipe.healthLabels.map((label, index) => (
                  <li key={index}>{label}</li>
                ))}
              </ul>
              <Text
                mt="3rem"
                textAlign="center"
                borderRadius={3}
                bgColor="green.300"
              >
                Diet: {recipe.dietLabels}
              </Text>
              <Text
                mt="3rem"
                textAlign="center"
                borderRadius={3}
                bgColor="red.200"
              >
                Cautions: {recipe.cautions}
              </Text>
            </GridItem>
          </Grid>
        </Box>

        <Box mt={4}>
          <Button variant="solid" colorScheme="blue" onClick={navigateBack}>
            Back
          </Button>
        </Box>
      </Stack>
    </Card>
  );
}
