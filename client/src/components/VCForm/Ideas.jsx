import React from "react";
import { Paper, TextField, Typography } from "@mui/material";
import Block from "./Block";

const Ideas = ({ styles, formValues, onClickHandler }) => {
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
            If you are interested in a strategic partnership, please describe
            any specific partnership ideas you have in mind.
          </Typography>
          <TextField
            sx={{
              width: { xs: "100%" },
            }}
            id="outlined-textarea"
            type="text"
            label="Your Answer"
            name="ideas"
            value={formValues.ideas}
            onChange={onClickHandler}
          />
        </Block>
      </Paper>
    </>
  );
};

export default Ideas;
