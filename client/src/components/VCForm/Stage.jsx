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

const Stage = ({ styles, onClickHandler }) => {
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
            Please mark the startup stage you would be interested in connecting
            with
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: ".8rem", sm: "1rem" },
              marginTop: "-1rem",
              color: "gray",
            }}
          >
            Do mark all the relevant filed.
          </Typography>
          <FormControl>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label">
              <FormControlLabel
                value="Idea stage"
                onChange={onClickHandler}
                control={<Radio />}
                label={
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontSize: { xs: ".9rem", sm: "1.2rem" },
                    }}
                  >
                    Idea stage
                  </Typography>
                }
                name="stage"
              />
              <FormControlLabel
                value="Prototype stage"
                onChange={onClickHandler}
                control={<Radio />}
                label={
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontSize: { xs: ".9rem", sm: "1.2rem" },
                    }}
                  >
                    Prototype stage
                  </Typography>
                }
                name="stage"
              />
              <FormControlLabel
                value="MVP stage"
                onChange={onClickHandler}
                control={<Radio />}
                label={
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontSize: { xs: ".9rem", sm: "1.2rem" },
                    }}
                  >
                    MVP stage
                  </Typography>
                }
                name="stage"
              />
              <FormControlLabel
                value="PoC stage"
                onChange={onClickHandler}
                control={<Radio />}
                label={
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontSize: { xs: ".9rem", sm: "1.2rem" },
                    }}
                  >
                    PoC stage
                  </Typography>
                }
                name="stage"
              />
              <FormControlLabel
                value="Early traction stage"
                onChange={onClickHandler}
                control={<Radio />}
                label={
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontSize: { xs: ".9rem", sm: "1.2rem" },
                    }}
                  >
                    Early traction stage
                  </Typography>
                }
                name="stage"
              />
              <FormControlLabel
                value="Open to all the stages"
                onChange={onClickHandler}
                control={<Radio />}
                label={
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontSize: { xs: ".9rem", sm: "1.2rem" },
                    }}
                  >
                    Open to all the stages
                  </Typography>
                }
                name="stage"
              />
            </RadioGroup>
          </FormControl>
        </Block>
      </Paper>
    </>
  );
};

export default Stage;
