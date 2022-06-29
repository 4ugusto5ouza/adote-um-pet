import { Box } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { Header } from "./shared/components/Header";

export const App = () => {
  return (
    <Box w={"100wh"} h={"100vh"} boxSizing={"border-box"}>
      <BrowserRouter>
        <Header />
        <Box maxW={"1400px"} marginX={"auto"} bgColor={"#fdfdfd"}>
          <AppRoutes />
        </Box>
      </BrowserRouter>
    </Box>
  );
};
