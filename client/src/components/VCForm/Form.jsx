import { Button, Box, Container, Modal, Typography } from "@mui/material";
import React from "react";
import Header from "../formComponents/Header";
import Purpose from "./Purpose";
import Contact from "./Contact";
import Email from "./Email";
import Stage from "./Stage";
import Domain from "./Domain";
import Expertise from "./Expertise";
import Ideas from "./Ideas";
import Info from "./Info";
import Links from "./Links";
import Name from "./Name";
import Navbar from "../formComponents/Navbar";

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
                margin: "0 1.5rem",
                textAlign: "left",
              }}
            >
              <Header styles={styles} />
              <Name
                styles={styles}
                formValues={formValues}
                onClickHandler={onClickHandler}
              />
              <Contact
                styles={styles}
                formValues={formValues}
                onClickHandler={onClickHandler}
              />
              <Email
                styles={styles}
                formValues={formValues}
                onClickHandler={onClickHandler}
              />
              <Purpose
                styles={styles}
                formValues={formValues}
                onClickHandler={onClickHandler}
                setFormValues={setFormValues}
              />
              <Stage styles={styles} onClickHandler={onClickHandler} />
              <Domain
                styles={styles}
                formValues={formValues}
                onClickHandler={onClickHandler}
                setFormValues={setFormValues}
              />
              <Expertise
                styles={styles}
                formValues={formValues}
                onClickHandler={onClickHandler}
              />
              <Ideas
                styles={styles}
                formValues={formValues}
                onClickHandler={onClickHandler}
              />
              <Info
                styles={styles}
                formValues={formValues}
                onClickHandler={onClickHandler}
              />
              <Links
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
              width: { xs: 200, sm: 400 },
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
              {" "}
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{
                  textTransform: "captalize",
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
              variant="contained"
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
