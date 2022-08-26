import { Button, Box, Container } from "@mui/material";
import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import { VcFields } from "./data";
import VcInput from "./VcInput";
import DisplayModal from "./DisplayModal";

const Form = () => {
  const styles = {
    width: "100%",
    margin: "1rem auto 0 ",
    borderRadius: "10px",
  };
  const defaultvalues = {
    name: "",
    contact: "",
    domain: "",
    email: "",
    expertise: "",
    ideas: "",
    info: "",
    links: "",
    purpose: "",
    stage: "",
  };

  const [formValues, setFormValues] = React.useState(defaultvalues);
  const [open, setOpen] = React.useState(false);

  const setForm = (optionsCheck)=>{
    setFormValues(state=>({
      ...state,
      [optionsCheck.name]: {options: optionsCheck.options, otherOption: optionsCheck.otherOptions},
      
    }));

  }
  const onClickHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formValues);
    setOpen(true);
  };
  return (
    <>
      <Navbar />
      <Box
        sx={{
          backgroundColor: "#e5e1ed;",
          fontSize: "62.5%",
          boxSizing: "border-box",
        }}
      >
        <Container maxWidth="lg">
          <form onSubmit={submitHandler}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                margin: " 0 1.5rem",
                textAlign: "left",
              }}
            >
              <Header styles={styles} />
              {Object.keys(VcFields).map((field,index) => (
                <VcInput
                  key={[field,index]}
                  value={field}
                  title={VcFields[field].title}
                  formValue={formValues[`${field}`]}
                  subtitle={VcFields[field].subtitle}
                  options={VcFields[field].options}
                  otherOption={VcFields[field].otherOption}
                  onClickHandler={onClickHandler}
                  setForm={setForm}
                  formValues={formValues}
                />
              ))}
              <Button
                variant="contained"
                type="submit"
                sx={{
                  backgroundColor: "#340C64",
                  width: "8rem",
                  margin: "1rem 0",
                  fontSize: "1rem",
                  padding: ".5rem",
                  "&:hover": {
                    backgroundColor: "rgba(52,12,100, 0.9)",
                  },
                }}
              >
                Submit
              </Button>
            </Box>
          </form>
        </Container>
        <DisplayModal open={open}/>
      </Box>
    </>
  );
};

export default Form;
