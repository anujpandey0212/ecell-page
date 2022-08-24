import { Button, Box, Container } from "@mui/material";
import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import SimpleInput from "./StartUpInput";
import DisplayModal from "./DisplayModal";
import { startUpFields } from "./data";

const Form = () => {
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

  const [formValues, setFormValues] = React.useState(defaultvalues);
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
    handleOpen();
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
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
              {Object.keys(startUpFields).map((field) => (
                <SimpleInput
                  value={field}
                  title={startUpFields[field].title}
                  formValue={formValues[`${field}`]}
                  subtitle={startUpFields[field].subtitle}
                  options={startUpFields[field].options}
                  otherOption={startUpFields[field].otherOption}
                  onClickHandler={onClickHandler}
                  setFormValues={setFormValues}
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
                submit
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
