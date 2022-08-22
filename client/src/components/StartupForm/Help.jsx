import React from "react";
import { Paper, TextField, Typography } from "@mui/material";
import Block from "./Block";

const Help = ({ styles, formValues, onClickHandler }) => {
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
            What kind of help do you expect from E-cell IIT Hyderabad?*
          </Typography>
          <TextField
            sx={{
              width: { xs: "100%" },
            }}
            id="outlined-textarea"
            multiline
            required
            label="Your Answer"
            name="help"
            value={formValues.help}
            onChange={onClickHandler}
          />
        </Block>
      </Paper>
    </>
  );
};

export default Help;
