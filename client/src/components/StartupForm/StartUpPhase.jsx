import React from "react";
import {
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import Block from "./Block";

const StartUpPhase = ({ styles, formValues, setFormValues }) => {
  const [other, setOther] = React.useState(true);
  const onClickOther = () => {
    setOther(false);
    formValues.startUpPhase = "";
    console.log(!other);
  };
  const onClickHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    setOther(true);
  };
  const onTextHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

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
            Start-up Phase
          </Typography>
          <FormControl>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label">
              <FormControlLabel
                value="Currently in ideation"
                onChange={onClickHandler}
                control={<Radio />}
                label={
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontSize: { xs: ".9rem", sm: "1.2rem" },
                    }}
                  >
                    Currently in ideation
                  </Typography>
                }
                name="startUpPhase"
              />
              <FormControlLabel
                value="Has been ideated thoroughly"
                control={<Radio />}
                label={
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontSize: { xs: ".9rem", sm: "1.2rem" },
                    }}
                  >
                    Has been ideated thoroughly
                  </Typography>
                }
                name="startUpPhase"
                onChange={onClickHandler}
              />
              <FormControlLabel
                value="Prototype is in the making"
                control={<Radio />}
                label={
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontSize: { xs: ".9rem", sm: "1.2rem" },
                    }}
                  >
                    Prototype is in the making
                  </Typography>
                }
                name="startUpPhase"
                onChange={onClickHandler}
              />
              <FormControlLabel
                value="Prototype has been released"
                control={<Radio />}
                label={
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontSize: { xs: ".9rem", sm: "1.2rem" },
                    }}
                  >
                    Prototype has been released
                  </Typography>
                }
                name="startUpPhase"
                onChange={onClickHandler}
              />
              <FormControlLabel
                value="Has received funding in the past"
                control={<Radio />}
                label={
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontSize: { xs: ".9rem", sm: "1.2rem" },
                    }}
                  >
                    Has received funding in the past
                  </Typography>
                }
                name="startUpPhase"
                onChange={onClickHandler}
              />
              <FormControlLabel
                value=""
                control={<Radio />}
                label={
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontSize: { xs: ".9rem", sm: "1.2rem" },
                    }}
                  >
                    Other
                  </Typography>
                }
                onChange={onClickOther}
              />
            </RadioGroup>

            <TextField
              sx={{
                width: { xs: "100%" },
              }}
              id="outlined-textarea"
              disabled={other}
              label="Your Answer"
              name="startUpPhase"
              value={other ? "" : formValues.startUpPhase}
              onChange={onTextHandler}
            />
          </FormControl>
        </Block>
      </Paper>
    </>
  );
};

export default StartUpPhase;
