import React from "react";
import { Paper, TextField, Typography } from "@mui/material";
import Block from "./Block";

const Email = ({ styles, formValues, onClickHandler }) => {
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
            Email ID
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: ".8rem", sm: "1rem" },
              marginTop: "-1rem",
              color: "gray",
            }}
          >
            E-mail ID of the person mentioned above.
          </Typography>
          <TextField
            sx={{
              width: { xs: "100%" },
            }}
            id="outlined-textarea"
            type="email"
            required
            label="Your Answer"
            name="email"
            value={formValues.email}
            onChange={onClickHandler}
          />
        </Block>
      </Paper>
    </>
  );
};

export default Email;
