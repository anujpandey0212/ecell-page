import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../../assets/ecell_logo.png";

function DrawerAppBar() {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ backgroundColor: "#fff" }}>
        <Toolbar>
          <Typography
            sx={{
              flexGrow: 1,
              color: "#333",
              fontWeight: 400,
              fontSize: "1.3rem",
            }}
          >
            IIT HYDERBAD
          </Typography>
          <Box sx={{ margin: ".2rem 0" }}>
            <img src={logo} width="70px" />
          </Box>
        </Toolbar>
      </AppBar>

      <Toolbar />
    </Box>
  );
}

export default DrawerAppBar;
