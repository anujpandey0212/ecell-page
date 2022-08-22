import React from "react";
import { Paper, TextField, Typography } from "@mui/material";
import Block from "./Block";

const Info = ({ styles, formValues, onClickHandler }) => {
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
            Please share any other information which might help us in finding
            relevant startups for you.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: ".8rem", sm: "1rem" },
              marginTop: "-1rem",
              color: "gray",
            }}
          >
            You can mention about your industry connections, ongoing projects,
            current startup investment portfolio, or any other similar
            information here.
          </Typography>
          <TextField
            sx={{
              width: { xs: "100%" },
            }}
            id="soutlined-textarea"
            type="text"
            label="Your Answer"
            name="info"
            value={formValues.info}
            onChange={onClickHandler}
          />
        </Block>
      </Paper>
    </>
  );
};

export default Info;
