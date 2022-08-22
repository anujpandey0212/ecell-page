import { Box } from "@mui/material";
import React from "react";

const Block = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "1rem",
        flexDirection: "column",
        padding: "2.5rem 2rem",
      }}
    >
      {props.children}
    </Box>
  );
};

export default Block;
