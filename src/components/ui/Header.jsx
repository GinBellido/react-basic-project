import { Box, Heading, Text, Input } from "@chakra-ui/react";

export function Header({ onSearch }) {
  const handleSearchChange = (event) => {
    const { value } = event.target;
    onSearch(value);
  };

  return (
    <Box
      mt={"2rem"}
      pt={"7rem"}
      bgImage={"background.webp"}
      bgSize={"98rem"}
      bgRepeat="no-repeat"
      w={"90rem"}
      h={"20rem"}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Heading size={"2xl"} textAlign={"center"} mb={"4"} textColor={"white"}>
        Welcome to my Recipe Blog
      </Heading>

      <Text
        textAlign={"center"}
        textColor={"white"}
        fontSize="xl"
        fontWeight="bold"
      >
        hunger? Don't wait and discover delicious and healthy recipes for your
        day to day.
      </Text>

      <Input
        type="text"
        placeholder="Search recipes"
        onChange={handleSearchChange}
        style={{ background: "white", marginTop: "1rem", width: "300px" }}
      />
    </Box>
  );
}
