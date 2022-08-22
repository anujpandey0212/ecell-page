import { Button, Box, Container, Modal, Typography } from "@mui/material";
import React from "react";
import FounderName from "./FounderName";
import Header from "./Header";
import IndustryName from "./IndustryName";
import StartupName from "./StartupName";
import Email from "./Email";
import Contact from "./Contact";
import StartUpPhase from "./StartUpPhase";
import Discription from "./Discription";
import Location from "./Location";
import Hire from "./Hire";
import Help from "./Help";
import Links from "./Links";
import Hear from "./Hear";
import Navbar from "./Navbar";

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
              <StartupName
                styles={styles}
                formValues={formValues}
                onClickHandler={onClickHandler}
              />

              <IndustryName
                styles={styles}
                formValues={formValues}
                onClickHandler={onClickHandler}
              />
              <Location
                styles={styles}
                formValues={formValues}
                onClickHandler={onClickHandler}
              />
              <FounderName
                styles={styles}
                formValues={formValues}
                onClickHandler={onClickHandler}
              />
              <Email
                styles={styles}
                formValues={formValues}
                onClickHandler={onClickHandler}
              />
              <Contact
                styles={styles}
                formValues={formValues}
                onClickHandler={onClickHandler}
              />
              <StartUpPhase
                styles={styles}
                formValues={formValues}
                onClickHandler={onClickHandler}
                setFormValues={setFormValues}
              />
              <Discription
                styles={styles}
                formValues={formValues}
                onClickHandler={onClickHandler}
              />
              <Hire
                styles={styles}
                formValues={formValues}
                onClickHandler={onClickHandler}
              />
              <Help
                styles={styles}
                formValues={formValues}
                onClickHandler={onClickHandler}
              />
              <Links
                styles={styles}
                formValues={formValues}
                onClickHandler={onClickHandler}
              />
              <Hear
                styles={styles}
                formValues={formValues}
                onClickHandler={onClickHandler}
              />

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
