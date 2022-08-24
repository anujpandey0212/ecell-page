import { Button, Box, Container, Modal, Typography } from "@mui/material";
import React from "react";

import Header from "./Header";

import Navbar from "./Navbar";
import SimpleInput from "../formComponents/SimpleInput";

const fields = {
  startUpName: {
    title: "Name of Startup",
  },
  industryName: {
    title:
      "Industry / Sector of your Startup ( fintech, healthcare, ed-tech, etc.)",
  },
  location: {
    title: "Location",
  },
  founderName: {
    title: "Name of Founder/Representative of Start-up",
    subtitle: "Enter the name of any one person from your Startup",
  },
  email: {
    title: "Email ID",
    subtitle: "E-mail ID of the person mentioned above.",
    type: "email",
  },
  contact: {
    title: "Contact Number",
    type: "number",
  },
  startUpPhase: {
    title: "Start-up Phase",
    options: [
      "Currently in ideation",
      "Has been ideated thoroughly",
      "Prototype is in the making",
      "Prototype has been released",
      "Has received funding in the past",
    ],
    otherOption: true,
  },
  discription: {
    title: "Elaborate Description of the Startup",
  },
  hire: {
    title:
      "Will you be interested in hiring students of IIT Hyderabad for internsip/placements.",
  },
  help: {
    title: "What kind of help do you expect from E-cell IIT Hyderabad?",
  },
  links: {
    title: "Websit / LinkedIn / Social Media links",
  },
  hear: {
    title: "How did you ear about this event?",
  },
};

const Form = () => {
  const styles = {
    width: "100%",
    margin: "1rem auto 0 ",
    borderRadius: "10px",
  };
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
              {Object.keys(fields).map((field) => (
                <SimpleInput
                  value={field}
                  title={fields[field].title}
                  formValue={formValues[`${field}`]}
                  subtitle={fields[field].subtitle}
                  options={fields[field].options}
                  otherOption={fields[field].otherOption}
                  onClickHandler={onClickHandler}
                  setFormValues={setFormValues}
                  formValues={formValues}
                />
              ))}
              <Button
                variant="contained"
                type="submit"
                sx={{
                  backgroundColor: "rgb(103, 58, 183)",
                  width: "8rem",
                  margin: "1rem 0",
                  fontSize: "1rem",
                  padding: ".5rem",
                  "&:hover": {
                    backgroundColor: "rgba(103, 58, 183, 0.9)",
                  },
                }}
              >
                submit
              </Button>
            </Box>
          </form>
        </Container>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: 200, sm: 400, md: 600 },
              backgroundColor: "white",
              boxShadow: 24,
              p: 6,
              display: "flex",
              flexDirection: "column",
              gap: { xs: "1rem", sm: "2rem" },
              borderRadius: "5px",
            }}
          >
            <div>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{
                  textTransform: "uppercase",

                  fontSize: { xs: "1.1rem", sm: "1.4rem" },
                }}
              >
                Registration Succesful
              </Typography>
              <Typography
                id="modal-modal-description"
                sx={{
                  fontSize: { xs: ".9rem", sm: "1.1rem" },
                  color: "grey",
                  margin: ".5rem auto",
                }}
              >
                Your response has been recorded
              </Typography>
            </div>
            <Button
              variant="outlined"
              sx={{ fontSize: { xs: ".8rem", sm: ".9rem" } }}
            >
              <a href="https://www.google.com">HOME</a>
            </Button>
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default Form;
