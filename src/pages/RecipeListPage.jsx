import React, { useState } from "react";
import { Center, Box, SimpleGrid, Image, Text } from "@chakra-ui/react";
import { data } from "../utils/data";
import { Header } from "../components/ui/Header";
import { RecipePage } from "../components/RecipePage";

export const RecipeListPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const filteredRecipes = data.hits
    .map((hit) => hit.recipe)
    .filter((recipe) => {
      const titleMatch = recipe.label
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const healthLabelsMatch = recipe.healthLabels.some((label) =>
        label.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return titleMatch || healthLabelsMatch;
    });

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const navigateBack = () => {
    setSelectedRecipe(null);
  };

  return (
    <Center bgColor="gray" flexDir="column">
      <div>
        <Header onSearch={setSearchTerm} />
      </div>

      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} navigateBack={navigateBack} />
      ) : (
        <SimpleGrid columns={[1, 2, 3]} pr="2rem" pl="2rem" mt={8} mb={5}>
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe, index) => (
              <Box
                key={index}
                bgColor="black"
                boxShadow="dark-lg"
                p="7"
                m={4}
                rounded="md"
                bg="whiteAlpha.700"
                borderWidth="1px"
                borderRadius="md"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                onClick={() => handleRecipeClick(recipe)}
              >
                <Image
                  src={recipe.image}
                  alt={recipe.label}
                  maxH="200px"
                  minW="300px"
                  objectFit="cover"
                />

                <Text alignContent="center" mt={2} fontWeight="medium">
                  {recipe.label}
                </Text>

                <Text
                  mt={2}
                  bg="green.300"
                  w="45%"
                  textColor="green"
                  fontWeight="semibold"
                  fontSize="sm"
                  borderRadius="2xl"
                  textAlign="center"
                >
                  {recipe.dietLabels}
                </Text>

                <Text mt={2} fontWeight="s">
                  Dish: {recipe.mealType}
                </Text>

                <Text
                  mt={2}
                  borderRadius="2xl"
                  fontWeight="bold"
                  textColor="red"
                  fontSize="xs"
                >
                  {recipe.cautions}
                </Text>

                <Text mt={2} fontWeight="s">
                  {(() => {
                    if (recipe.healthLabels.includes("Vegan")) {
                      return "Vegetarian / Vegan";
                    } else if (recipe.healthLabels.includes("Vegetarian")) {
                      return "Vegetarian";
                    } else {
                      return null;
                    }
                  })()}
                </Text>
              </Box>
            ))
          ) : (
            <Text>No recipes found.</Text>
          )}
        </SimpleGrid>
      )}
    </Center>
  );
};
