import React from "react";
import { Paper, TextField, Typography } from "@mui/material";
import Block from "./Block";

const FounderName = ({ styles, formValues, onClickHandler }) => {
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
            Start-up Phase*
          </Typography>
          <TextField
            sx={{
              width: { xs: "100%" },
            }}
            id="outlined-textarea"
            required
            label="Your Answer"
            name="founderName"
            value={formValues.founderName}
            onChange={onClickHandler}
          />
        </Block>
      </Paper>
    </>
  );
};

export default FounderName;
