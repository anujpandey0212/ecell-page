import {
  Box,
  Paper,
  TextField,
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

const StartUpInput = ({
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
}) => {
  const [other, setOther] = React.useState(true);
  const onClickOther = () => {
    setOther(false);
    setFormValues({
      ...formValues,
      [value]: "",
    });
  };
  const onClickHandlerOptions = (e) => {
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
                {options.map((el) => (
                  <FormControlLabel
                    value={el}
                    onChange={onClickHandlerOptions}
                    control={<Radio />}
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
                  value={other ? "" : formValue}
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

export default StartUpInput;
