import { Button, Box, Container } from "@mui/material";
import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import SimpleInput from "./StartUpInput";
import DisplayModal from "./DisplayModal";
import { startUpFields } from "./data";
import LoadingSpinner from "./LoadingSpinner";

const defaultvalues = {
  startUpName: "",
  industryName: "",
  location: "",
  founderName: "",
  email: "",
  contact: "",
  startUpPhase: "",
  discription: "",
  hire: "",
  help: "",
  links: "",
  hear: "",
};

const Form = () => {
  const [formValues, setFormValues] = React.useState(defaultvalues);
  const [isValid, setIsValid] = React.useState(false);
  const [formErrors, setFormErrors] = React.useState({});
  const [isSubmit, setIsSubmit] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSent, setIsSent] = React.useState(false);

  React.useEffect(() => {
    if (isSubmit && isValid) {
      let values = { ...formValues };

      values.contact = parseInt(values.contact.trim(), 10);
      const schema = {
        Name: values.startUpName.trim(),
        Sector: values.industryName.trim(),
        Location: values.location,
        Representative_name: values.founderName.trim(),
        // Member_name: values?.member.trim(),
        Email_member: values.email.trim(),
        Contact_number: values.contact,
        Phase: values.startUpPhase.trim(),
        Description: values.discription.trim(),
        Hiring_interest: values.hire.trim(),
        Help_expected: values.help.trim(),
        Links: values.links.trim(),
        Hear_how: values.hear.trim(),
      };
      const postData = async () => {
        const res = await fetch("http://localhost:3001/api/startup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(schema),
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
      };

      postData();
    }
  }, [isSubmit, isValid]);

  const setForm = (input) => {
    if (input) {
      setFormValues((state) => ({ ...state, [input.name]: input.value }));
    }
  };
  const onClickHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSubmit(true);
    function submitForm() {
      setFormErrors(validate(formValues));
    }

    setTimeout(submitForm, 600);
  };

  React.useEffect(() => {
    if (Object.keys(formErrors).length === 0) {
      setIsValid(true);
      setIsSubmit(true);
    } else {
      setIsLoading(false);
      setIsValid(false);
    }
  }, [formErrors]);

  const required = "Required*";

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.founderName) {
      errors.founderName = required;
    }
    if (!values.email) {
      errors.email = required;
    } else if (!regex.test(values.email)) {
      errors.email = "Not a valid Email format";
    }
    if (!values.startUpPhase) {
      errors.startUpPhase = required;
    }
    if (!values.help) {
      errors.help = required;
    }
    return errors;
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          backgroundColor: "#e5e1ed",
          fontSize: "62.5%",
          boxSizing: "border-box",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            backgroundColor: "#e5e1ed",
            fontSize: "62.5%",
            boxSizing: "border-box",
          }}
        >
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
              <Header />
              {Object.keys(startUpFields).map((field, index) => (
                <SimpleInput
                  key={[index, index]}
                  value={field}
                  title={startUpFields[field].title}
                  formValue={formValues[`${field}`]}
                  subtitle={startUpFields[field].subtitle}
                  options={startUpFields[field].options}
                  otherOption={startUpFields[field].otherOption}
                  onClickHandler={onClickHandler}
                  setForm={setForm}
                  formValues={formValues}
                  formErrors={formErrors}
                  type={startUpFields.type}
                />
              ))}
              <Button
                loading
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
