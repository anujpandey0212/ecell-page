import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../../assets/E-Cell logo footer.png";

function DrawerAppBar() {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#340C64",
        }}
      >
        <Toolbar>
          <Typography
            sx={{
              flexGrow: 1,
              color: "#fff",
              fontWeight: 400,
              fontSize: "1.3rem",
            }}
          >
            <a href="/">BACK</a>
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
