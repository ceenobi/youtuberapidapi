import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {

return (
  <>
    <Box bg='blackAlpha.900'>
      <Navbar/>
      <Outlet />
    </Box>
  </>
)

}