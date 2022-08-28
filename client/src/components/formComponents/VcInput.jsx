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
import { useEffect, useRef } from "react";

const VcInput = ({
  title,
  value,
  type = "text",
  formValue,
  setTextInForm,
  subtitle = "",
  options,
  otherOption,
  setForm,
  formErrors,
}) => {
  const [other, setOther] = React.useState(true);
  const [otherText, setOtherText] = React.useState("");
  const [text, setText] = React.useState("");
  const [optionsCheck, setOptionsCheck] = React.useState({
    options: [],
    name: null,
    otherOptions: "",
  });
  const otherRef = useRef();

  const onClickOther = (e) => {
    if (e.target.checked == true) {
      return setOther(false);
    }
    return setOther(true);
  };

  const onTextChangeHandler = (e) => {
    setText(e.target.value);
    e.target.value = text;
  };

  useEffect(() => {
    let refresh = setTimeout(() => {
      setTextInForm(text, value);
    }, 500);

    return () => {
      clearTimeout(refresh, () => {
        setTextInForm(text, value);
      });
    };
  }, [text]);
  useEffect(() => {
    if (other) {
      setOptionsCheck((state) => ({ ...state, otherOptions: "" }));
    } else {
      setOptionsCheck((state) => ({
        ...state,
        otherOptions: otherText?.value,
      }));
    }
  }, [other]);

  useEffect(() => {
    setForm(optionsCheck);
  }, [optionsCheck]);

  useEffect(() => {
    function addOption() {
      setOptionsCheck((state) => {
        let updated = {
          ...state,
          otherOptions: otherText?.value,
          name: value,
        };
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

  const onChangeHandlerOptions = (e) => {
    console.log(e.target.value);
    if (e.target.checked) {
      setOptionsCheck((state) => ({
        options: [...state.options, e.target.value],
        name: e.target.name,
        otherOptions: otherText?.value,
      }));
    } else {
      console.log("Need to redo this");
      console.log(e.target.name);
      console.log(optionsCheck);
      setOptionsCheck((state) => {
        let update = { ...state };
        let newOptions = update?.options.filter((el) => el !== e.target.value);
        update.options = newOptions;
        return update;
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
                <RadioGroup aria-labelledby="radio-buttons-group-label">
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
                      value={"other"}
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
                    ref={otherRef}
                    sx={{
                      width: { xs: "100%" },
                    }}
                    id="outlined-textarea"
                    disabled={other}
                    label="Your Answer"
                    name={value}
                    value={otherText?.value || ""}
                    onChange={(e) => {
                      setOtherText({
                        value: e.target.value,
                        name: e.target.name,
                      });
                    }}
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
                value={text}
                onChange={onTextChangeHandler}
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
