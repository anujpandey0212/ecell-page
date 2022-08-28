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
  const [formErrors, setFormErrors] = React.useState({});
  const [isSubmit, setIsSubmit] = React.useState(false);

  const setForm = (optionsCheck) => {
    let optionObject = { ...optionsCheck };
    const name = optionsCheck.name;
    delete optionObject.name;

    setFormValues((state) => {
      let update = { ...state };
      update[name] = optionObject;
      return update;
    });
    console.log(formValues);
  };
  const setTextInForm = (text, name) => {
    setFormValues((state) => ({
      ...state,
      [name]: text,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    function submitForm() {
      setFormErrors(validate(formValues));
      setIsSubmit(true);
    }
    let timeout = setTimeout(submitForm, 600);
    return () => {
      clearTimeout(timeout, 600);
    };
  };
  React.useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit === true) {
      console.log(formValues);
    }
  }, [formErrors]);

  const required = "Required*";
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = required;
    } else if (!regex.test(values.email)) {
      errors.email = "Not a valid Email format";
    }
    if (!values.purpose) {
      errors.purpose = required;
    }
    if (!values.stage) {
      errors.stage = required;
    }
    if (!values.domain) {
      errors.domain = required;
    }
    return errors;
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
              {Object.keys(VcFields).map((field, index) => (
                <VcInput
                  key={[field, index]}
                  value={field}
                  title={VcFields[field].title}
                  formValue={formValues[field]}
                  subtitle={VcFields[field].subtitle}
                  options={VcFields[field].options}
                  otherOption={VcFields[field].otherOption}
                  setTextInForm={setTextInForm}
                  setForm={setForm}
                  formErrors={formErrors}
                  type={VcFields.type}
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
        <DisplayModal open={open} />
      </Box>
    </>
  );
};

export default Form;
