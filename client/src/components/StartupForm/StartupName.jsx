import { Paper, TextField, Typography } from "@mui/material";
import React from "react";
import Block from "./Block";

const StartupName = ({ styles, formValues, onClickHandler }) => {
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
            startup name
          </Typography>
          <TextField
            sx={{
              width: { xs: "100%" },
            }}
            id="outlined-textarea"
            multiline
            label="Your Answer"
            name="startUpName"
            value={formValues.startupName}
            onChange={onClickHandler}
          />
        </Block>
      </Paper>
    </>
  );
};

export default StartupName;
