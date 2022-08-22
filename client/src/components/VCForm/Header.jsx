import { Paper, Typography } from "@mui/material";
import React from "react";
import Block from "./Block";

const Header = (props) => {
  return (
    <>
      <Paper
        sx={{
          ...props.styles,
        }}
        elevation={1}
      >
        <Block>
          <Typography
            variant="h4"
            sx={{
              textTransform: "uppercase",
              marginTop: "1rem",
              fontSize: { xs: "1.5rem", sm: "2rem" },
            }}
          >
            University E-Cell Summit 2022
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: ".9rem", sm: "1.2rem" },
              marginBottom: "1rem",
            }}
          >
            Please fill this registration form for VC
          </Typography>
        </Block>
      </Paper>
    </>
  );
};

export default Header;
