import { Button, Box, Container } from "@mui/material";
import React, { useInsertionEffect } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import { VcFields } from "./data";
import VcInput from "./VcInput";
import DisplayModal from "./DisplayModal";
import LoadingSpinner from "./LoadingSpinner";

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
  const [isSubmit, setIsSubmit] = React.useState(false);
  const [formErrors, setFormErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSent, setIsSent] = React.useState(false);

  // React.useEffect(() => {
  //   console.log(formValues);
  // }, [isSubmit]);

  function checkEmpty(option) {
    if (option?.options?.length === 0 && option?.otherOptions === undefined) {
      return true;
    }
    return false;
  }

  React.useEffect(() => {
    if (isSubmit && isValid) {
      let values = { ...formValues };
      if (values.contact !== "" || values.contact !== undefined) {
        values.contact = parseInt(values.contact, 10);
      }

      let purpose = [...values.purpose.options];
      if (values.purpose.otherOptions) {
        purpose.push(values.purpose.otherOptions);
      }

      let stage = [...values.stage.options];
      if (values.stage.otherOption) {
        stage.push(values.stage.otherOptions);
      }

      let domain = [...values.domain.options];
      if (values.domain.otherOptions) {
        domain.push(values.domain.otherOptions);
      }
      const schema = {
        Name: values.name,
        Contact_Number: values.contact,
        Email: values.email,
        Purpose: purpose,
        Interest: {
          Domain: domain,
          Stage: stage,
        },
        Expertise: values.expertise,
        Strategic_Partnership: values.ideas,
        Meta: values.info,
        Links: values.links,
      };
      for (let key in schema) {
        if (checkEmpty(schema[key])) {
          schema[key] = "";
        }
      }

      const body = JSON.stringify(schema);

      (async () => {
        const res = await fetch("http://localhost:3001/api/vc", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: body,
        });
        const msg = await res.json();
        setIsLoading(false);
        if (msg.Error) {
          console.log("Something went wrong");
          setIsSent(false);
        }
        if (msg?.Message === "Sent") {
          console.log("Success!");
          setIsSent(true);
        }
      })();
    }
  }, [isSubmit, isValid, isLoading]);

  const setForm = (optionsCheck) => {
    let optionObject = { ...optionsCheck };
    const name = optionsCheck.name;
    delete optionObject.name;

    setFormValues((state) => {
      let update = { ...state };
      update[name] = optionObject;
      return update;
    });
  };
  const setTextInForm = (text, name) => {
    setFormValues((state) => ({
      ...state,
      [name]: text,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    function submitForm() {
      setFormErrors(validate(formValues));
      setIsSubmit(true);
      console.log(formValues);
    }
    setTimeout(submitForm, 600);
  };

  React.useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit === true) {
      setOpen(true);
      setIsValid(true);
    } else {
      setIsLoading(false);
      setIsValid(false);
    }
  }, [formErrors]);

  const required = "Required*";
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!regex.test(values.email)) {
      errors.email = "Not a valid Email format";
    }
    if (
      values["purpose"].options.length === 0 &&
      values["purpose"].otherOptions === undefined
    ) {
      errors.purpose = required;
    }
    if (values["stage"].options.length === 0) {
      errors.stage = required;
    }
    if (
      values["domain"].options.length === 0 &&
      values["domain"].otherOptions === undefined
    ) {
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
                  key={[index, index]}
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
                {isLoading ? <LoadingSpinner /> : "Submit"}
              </Button>
            </Box>
          </form>
        </Container>
        <DisplayModal open={isSent} />
      </Box>
    </>
  );
};

export default Form;
