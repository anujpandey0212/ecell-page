import {
  Box,
  Paper,
  TextField,
  Typography,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Checkbox,
} from "@mui/material";
import React from "react";

const VcInput = ({
  title,
  value,
  type = "text",
  formValue,
  onClickHandler,
  subtitle = "",
  options,
  otherOption,
  formValues,
  setFormValues,
  onAddToArray,
  submit,
}) => {
  const [other, setOther] = React.useState(true);
  const [otherText, setOtherText] = React.useState("");
  const onClickOther = (e) => {
    if (e.target.checked == true) {
      setOther(false);
    }
  };

  const onTextHandler = (e) => {
    setOtherText(e.target.value);
    console.log(otherText);
    {
      submit ? onAddToArray(optionsCheck, otherText) : console.log(submit);
    }
  };
  const [optionsCheck, setOptionsCheck] = React.useState([]);
  const onClickHandlerOptions = (e) => {
    if (e.target.checked == true) {
      setOptionsCheck((state) => [...state, e.target.value]);
    } else {
      setOptionsCheck((state) => {
        let arr = [];
        arr = state.filter((opt) => opt !== e.target.value);
        return arr;
      });
    }
    setFormValues({
      ...formValues,
      [e.target.name]: optionsCheck,
    });
  };

  return (
    <>
      <Paper
        sx={{
          width: "100%",
          margin: "1rem auto 0 ",
          borderRadius: "10px",
          color: "#340C64",
          border: "2px solid #340C64",
        }}
        elevation={1}
      >
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            flexDirection: "column",
            padding: "2.5rem 2rem",
          }}
        >
          <Typography
            sx={{
              textTransform: "capitalize",
              fontSize: { xs: "1rem", sm: "1.3rem" },
            }}
          >
            {title}
          </Typography>
          {subtitle !== "" && (
            <Typography
              sx={{
                fontSize: { xs: ".8rem", sm: "1rem" },
                marginTop: "-1rem",
                color: "gray",
              }}
            >
              {subtitle}
            </Typography>
          )}

          {options ? (
            <FormControl>
              <RadioGroup aria-labelledby="demo-radio-buttons-group-label">
                {console.log(formValue)}
                {options.map((el) => (
                  <FormControlLabel
                    value={el}
                    onChange={onClickHandlerOptions}
                    control={<Checkbox />}
                    label={
                      <Typography
                        sx={{
                          textTransform: "capitalize",
                          fontSize: { xs: ".9rem", sm: "1.2rem" },
                        }}
                      >
                        {el}
                      </Typography>
                    }
                    name={value}
                  />
                ))}
                {otherOption ? (
                  <FormControlLabel
                    value=""
                    control={<Checkbox />}
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
                ) : (
                  ""
                )}
              </RadioGroup>
              {otherOption ? (
                <TextField
                  sx={{
                    width: { xs: "100%" },
                  }}
                  id="outlined-textarea"
                  disabled={other}
                  label="Your Answer"
                  name={value}
                  value={other ? "" : otherText}
                  onChange={onTextHandler}
                />
              ) : (
                ""
              )}
            </FormControl>
          ) : (
            <TextField
              sx={{
                width: { xs: "100%" },
              }}
              id="outlined-textarea"
              type={type}
              label="Your Answer"
              name={value}
              value={formValue}
              onChange={onClickHandler}
            />
          )}
        </Box>
      </Paper>
    </>
  );
};

export default VcInput;
