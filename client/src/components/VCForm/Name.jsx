import { Paper, TextField, Typography } from "@mui/material";
import React from "react";
import Block from "./Block";

const Name = ({ styles, formValues, onClickHandler }) => {
  return (
    <>
      <Paper
        sx={{
          ...styles,
        }}
        elevation={1}
      >
        <Block>
          <Typography
            sx={{
              textTransform: "capitalize",
              fontSize: { xs: "1rem", sm: "1.3rem" },
            }}
          >
            Name of VC
          </Typography>
          <TextField
            sx={{
              width: { xs: "100%" },
            }}
            id="outlined-textarea"
            multiline
            label="Your Answer"
            name="name"
            value={formValues.name}
            onChange={onClickHandler}
          />
        </Block>
      </Paper>
    </>
  );
};

export default Name;
