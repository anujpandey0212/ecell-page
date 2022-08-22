import React from "react";
import { Paper, TextField, Typography } from "@mui/material";
import Block from "./Block";

const Links = ({ styles, formValues, onClickHandler }) => {
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
            Websit / LinkedIn / Social Media links
          </Typography>
          <TextField
            sx={{
              width: { xs: "100%" },
            }}
            id="outlined-textarea"
            multiline
            label="Your Answer"
            name="links"
            value={formValues.links}
            onChange={onClickHandler}
          />
        </Block>
      </Paper>
    </>
  );
};

export default Links;
