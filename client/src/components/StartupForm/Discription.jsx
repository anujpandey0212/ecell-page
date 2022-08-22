import React from "react";
import { Paper, TextField, Typography } from "@mui/material";
import Block from "./Block";

const Discription = ({ styles, formValues, onClickHandler }) => {
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
            Elaborate Description of the Startup
          </Typography>
          <TextField
            sx={{
              width: { xs: "100%" },
            }}
            id="outlined-textarea"
            multiline
            label="Your Answer"
            name="discription"
            value={formValues.discription}
            onChange={onClickHandler}
          />
        </Block>
      </Paper>
    </>
  );
};

export default Discription;
