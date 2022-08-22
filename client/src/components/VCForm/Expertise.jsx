import React from "react";
import { Paper, TextField, Typography } from "@mui/material";
import Block from "./Block";

const Expertise = ({ styles, formValues, onClickHandler }) => {
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
            Please briefly mention your domain expertise—for example,
            Healthcare, Pharma, Automobile, Deeptech, FMCG, etc.
          </Typography>
          <TextField
            sx={{
              width: { xs: "100%" },
            }}
            id="outlined-textarea"
            type="text"
            label="Your Answer"
            name="expertise"
            value={formValues.expertise}
            onChange={onClickHandler}
          />
        </Block>
      </Paper>
    </>
  );
};

export default Expertise;
