import React from "react";
import { Paper, TextField, Typography } from "@mui/material";
import Block from "./Block";

const Location = ({ styles, formValues, onClickHandler }) => {
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
            Location
          </Typography>
          <TextField
            sx={{
              width: { xs: "100%" },
            }}
            id="outlined-textarea"
            multiline
            label="Your Answer"
            name="location"
            value={formValues.location}
            onChange={onClickHandler}
          />
        </Block>
      </Paper>
    </>
  );
};

export default Location;
