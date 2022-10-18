import Content1 from "./components/Content1";
import { Box, Flex} from "@chakra-ui/react";

function App() {

  return (
    <Box>
    <Flex direction='column' 
    backgroundColor="black">
        <Content1/>    
    </Flex>
</Box>
  );
}

export default App;
