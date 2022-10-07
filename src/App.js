import { Box, Stack } from "@mui/system";
import * as React from "react";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";

function App() {
  return (
    // <NavBar />
    <Box>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
}

export default App;
