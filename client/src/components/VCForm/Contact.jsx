import React from "react";
import { Paper, TextField, Typography } from "@mui/material";
import Block from "./Block";

const Contact = ({ styles, formValues, onClickHandler }) => {
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
            Contact Number
          </Typography>
          <TextField
            sx={{
              width: { xs: "100%" },
            }}
            id="outlined-textarea"
            type="number"
            label="Your Answer"
            name="contact"
            value={formValues.contact}
            onChange={onClickHandler}
          />
        </Block>
      </Paper>
    </>
  );
};

export default Contact;
