import { text } from "@fortawesome/fontawesome-svg-core";
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
import { useEffect } from "react";

const VcInput = ({
  title,
  value,
  type = "text",
  formValue,
  onClickHandler,
  subtitle = "",
  options,
  otherOption,
  setForm,
  formErrors,
}) => {
  const [other, setOther] = React.useState(true);
  const [otherText, setOtherText] = React.useState("");
  const [optionsCheck, setOptionsCheck] = React.useState({
    options: [],
    name: null,
    otherOptions: "",
  });

  const onClickOther = (e) => {
    if (e.target.checked == true) {
      setOther(false);
    } else {
      setOther(true);
      setOtherText("");
    }
  };
  useEffect(() => {
    setForm(optionsCheck);
  }, [optionsCheck]);

  useEffect(() => {
    function addOption() {
      setOptionsCheck((state) => {
        let updated = { ...state, otherOptions: otherText };

        return updated;
      });
    }
    let refresh = setTimeout(() => {
      addOption();
    }, 500);

    return () => {
      clearTimeout(refresh, () => {
        addOption();
      });
    };
  }, [otherText]);

  const onTextHandler = (e) => {
    setOtherText({
      value: e.target.value,
      name: e.target.name,
    });
    setForm(otherText);
  };

  const otherOptionsChecker = (e) => {
    console.log(e.target.name);
  };

  const onChangeHandlerOptions = (e) => {
    if (e.target.checked) {
      setOptionsCheck((state) => ({
        options: [...state.options, e.target.value],
        name: e.target.name,
        otherOptions: "",
      }));
    } else {
      setOptionsCheck((state) => {
        let arr = [];
        arr = Array(state).filter((opt) => opt !== e.target.value);
        return { options: arr, name: e.target.name, otherOptions: "" };
      });
    }
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
          <div>
            {options ? (
              <FormControl>
                <RadioGroup
                  aria-labelledby="radio-buttons-group-label"
                  onChange={otherOptionsChecker}
                >
                  {/* For checkbox options */}
                  {options.map((el) => (
                    <FormControlLabel
                      value={el}
                      onChange={onChangeHandlerOptions}
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
                  {/* for checkbox button for Other values */}
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
                  {/* For textfield provided other option is selected */}
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
                    value={otherText?.value || ""}
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
            <p
              style={{
                color: "red",
                fontSize: "1rem",
                marginTop: "1rem",
              }}
            >
              {formErrors[value]}
            </p>
          </div>
        </Box>
      </Paper>
    </>
  );
};

export default VcInput;
