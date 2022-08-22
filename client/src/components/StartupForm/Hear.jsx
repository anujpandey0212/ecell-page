import React from "react";
import { Paper, TextField, Typography } from "@mui/material";
import Block from "./Block";

const Hear = ({ styles, formValues, onClickHandler }) => {
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
            How did you ear about this event?
          </Typography>
          <TextField
            sx={{
              width: { xs: "100%" },
            }}
            id="outlined-textarea"
            label="Your Answer"
            name="hear"
            value={formValues.hear}
            onChange={onClickHandler}
          />
        </Block>
      </Paper>
    </>
  );
};

export default Hear;
