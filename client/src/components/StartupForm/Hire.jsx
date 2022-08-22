import React from "react";
import {
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import Block from "./Block";

const Hire = ({ styles, onClickHandler }) => {
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
            Will you be interested in hiring students of IIT Hyderabad for
            internsip/placements.
          </Typography>
          <FormControl>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label">
              <FormControlLabel
                value="True"
                onChange={onClickHandler}
                control={<Radio />}
                label="True"
                name="hire"
              />
              <FormControlLabel
                value="False"
                control={<Radio />}
                label="False"
                name="hire"
                onChange={onClickHandler}
              />
            </RadioGroup>
          </FormControl>
        </Block>
      </Paper>
    </>
  );
};

export default Hire;
