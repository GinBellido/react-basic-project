import { Stack, Input } from "@chakra-ui/react";
//import { data } from "../../utils/data";
//import { useState } from "react";

export function InputBox() {
  // const [Search, setSearch] = useState ("")

  // data.filter ((item) => {
  //     return Search.toLocaleLowerCase () === "" ? item : item.recipe.label.toLocaleLowerCase ().includes (Search)
  // })
  return (
    <Stack>
      <Input
        // onChange={(e)} => setSearch (e.target.value)
        placeholder="Search Recipe"
        size="sm"
        w={"50%"}
        bg={"whiteAlpha.700"}
        variant="outline"
        mt={"2rem"}
        ml={"22rem"}
        borderRadius={"2xl"}
      />
    </Stack>
  );
}
