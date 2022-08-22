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

const Purpose = ({ styles, formValues, setFormValues }) => {
  const [other, setOther] = React.useState(true);
  const onClickOther = () => {
    setOther(false);
    formValues.purpose = "";
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
            Please select the purpose of connecting with IIT Hyderabad startups
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: ".8rem", sm: "1rem" },
              marginTop: "-1rem",
              color: "gray",
            }}
          >
            Do mark all the relevant fields. If you have any other collaborative
            idea in mind, then please the other section.
          </Typography>
          <FormControl>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label">
              <FormControlLabel
                value="Investment"
                onChange={onClickHandler}
                control={<Radio />}
                label={
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontSize: { xs: ".9rem", sm: "1.2rem" },
                    }}
                  >
                    Investment
                  </Typography>
                }
                name="purpose"
              />
              <FormControlLabel
                value="Advisory"
                control={<Radio />}
                label={
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontSize: { xs: ".9rem", sm: "1.2rem" },
                    }}
                  >
                    Advisory
                  </Typography>
                }
                name="purpose"
                onChange={onClickHandler}
              />
              <FormControlLabel
                value="Strategic Partnership"
                control={<Radio />}
                label={
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontSize: { xs: ".9rem", sm: "1.2rem" },
                    }}
                  >
                    Strategic Partnership
                  </Typography>
                }
                name="purpose"
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
              name="purpose"
              value={other ? "" : formValues.purpose}
              onChange={onTextHandler}
            />
          </FormControl>
        </Block>
      </Paper>
    </>
  );
};

export default Purpose;
