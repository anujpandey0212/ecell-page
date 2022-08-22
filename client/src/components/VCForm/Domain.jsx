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

const Domain = ({ styles, formValues, setFormValues }) => {
  const [other, setOther] = React.useState(true);
  const onClickOther = () => {
    setOther(false);
    formValues.domain = "";
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
            Please mention the domain of a startup you would be interested in
            connecting with
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: ".8rem", sm: "1rem" },
              marginTop: "-1rem",
              color: "gray",
            }}
          >
            Please mark as many fields as possible. Add the missing domains in
            the other section to cover your interests.
          </Typography>
          <FormControl>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label">
              <FormControlLabel
                value="Healthcare"
                onChange={onClickHandler}
                control={<Radio />}
                label={
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontSize: { xs: ".9rem", sm: "1.2rem" },
                    }}
                  >
                    Healthcare
                  </Typography>
                }
                name="domain"
              />
              <FormControlLabel
                value="Deeptech, AI, ML, Blockchain"
                onChange={onClickHandler}
                control={<Radio />}
                label={
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontSize: { xs: ".9rem", sm: "1.2rem" },
                    }}
                  >
                    Deeptech, AI, ML, Blockchain
                  </Typography>
                }
                name="domain"
              />
              <FormControlLabel
                value="Food & Hospitality"
                onChange={onClickHandler}
                control={<Radio />}
                label={
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontSize: { xs: ".9rem", sm: "1.2rem" },
                    }}
                  >
                    Food & Hospitality
                  </Typography>
                }
                name="domain"
              />
              <FormControlLabel
                value="Consumer Goods"
                onChange={onClickHandler}
                control={<Radio />}
                label={
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontSize: { xs: ".9rem", sm: "1.2rem" },
                    }}
                  >
                    Consumer Goods
                  </Typography>
                }
                name="domain"
              />
              <FormControlLabel
                value="Automobiles"
                onChange={onClickHandler}
                control={<Radio />}
                label={
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontSize: { xs: ".9rem", sm: "1.2rem" },
                    }}
                  >
                    Automobiles
                  </Typography>
                }
                name="domain"
              />
              <FormControlLabel
                value="Enterprise Technology"
                onChange={onClickHandler}
                control={<Radio />}
                label={
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontSize: { xs: ".9rem", sm: "1.2rem" },
                    }}
                  >
                    Enterprise Technology
                  </Typography>
                }
                name="domain"
              />
              <FormControlLabel
                value="Banking and Financial Services"
                onChange={onClickHandler}
                control={<Radio />}
                label={
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontSize: { xs: ".9rem", sm: "1.2rem" },
                    }}
                  >
                    Banking and Financial Services
                  </Typography>
                }
                name="domain"
              />
              <FormControlLabel
                value="Biotechnology & Pharma tech"
                onChange={onClickHandler}
                control={<Radio />}
                label={
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontSize: { xs: ".9rem", sm: "1.2rem" },
                    }}
                  >
                    Biotechnology & Pharma tech
                  </Typography>
                }
                name="domain"
              />
              <FormControlLabel
                value="EduTech"
                onChange={onClickHandler}
                control={<Radio />}
                label={
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontSize: { xs: ".9rem", sm: "1.2rem" },
                    }}
                  >
                    EduTech
                  </Typography>
                }
                name="domain"
              />
              <FormControlLabel
                value="Agriculture"
                onChange={onClickHandler}
                control={<Radio />}
                label={
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontSize: { xs: ".9rem", sm: "1.2rem" },
                    }}
                  >
                    Agriculture
                  </Typography>
                }
                name="domain"
              />
              <FormControlLabel
                value="I am open to every domain"
                onChange={onClickHandler}
                control={<Radio />}
                label={
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontSize: { xs: ".9rem", sm: "1.2rem" },
                    }}
                  >
                    I am open to every domain
                  </Typography>
                }
                name="domain"
              />
              <FormControlLabel
                value="Social Entrepreneurship"
                onChange={onClickHandler}
                control={<Radio />}
                label={
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontSize: { xs: ".9rem", sm: "1.2rem" },
                    }}
                  >
                    Social Entrepreneurship
                  </Typography>
                }
                name="domain"
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
              name="domain"
              value={other ? "" : formValues.domain}
              onChange={onTextHandler}
            />
          </FormControl>
        </Block>
      </Paper>
    </>
  );
};

export default Domain;
