import { Paper, TextField, Typography } from "@mui/material";
import React from "react";
import Block from "./Block";

const IndustryName = ({ styles, formValues, onClickHandler }) => {
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
            Industry / Sector of your Startup ( fintech, healthcare, ed-tech,
            etc.)
          </Typography>
          <TextField
            sx={{
              width: { xs: "100%" },
            }}
            id="outlined-textarea"
            multiline
            label="Your Answer"
            name="industryName"
            value={formValues.industryName}
            onChange={onClickHandler}
          />
        </Block>
      </Paper>
    </>
  );
};

export default IndustryName;
