import React from "react";
import bg from "../../assets/bg_try1.jpg";
import { Grid, Typography, Button, Box } from "@mui/material";
import { css } from "@emotion/react";
import SendIcon from "@mui/icons-material/ArrowForwardIos";
import { styled } from "@mui/material/styles";
import Rocket from "../../assets/shuttle-icon.svg";
import Investor from "../../assets/investor-icon.png";

const BgContainer = styled("section")(
  ({ theme }) => `
  position: relative;
  overflow: hidden;
`
);

const Span = styled("span")`
  color: white;
`;

const IconButton = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Button
        variant="purple"
        sx={{ my: { md: 6, sm: 5, xs: 2 }, gap: "10px" }}
      >
        {props.text}
        <Box component="img" src={props.icon} sx={{ width: "2rem" }} />
      </Button>
    </Box>
  );
};

const TakePart = () => {
  return (
    <BgContainer>
      <Grid container>
        <Grid item container xs={12} md={7} sx={{ p: { md: "3rem" } }}>
          <Typography
            variant="h2left"
            sx={{
              fontFamily: "Poppins",
              fontSize: { md: "4rem", sm: "3rem", xs: "1.3rem" },
              color: "black",
              fontWeight: 600,
              pt: { md: 6, xs: 3 },
              pl: { md: 6, xs: 3 },
            }}
          >
            BECOME PART OF THE <Span>STARTUP FAIR!</Span>
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Button
              variant="text"
              endIcon={<SendIcon />}
              sx={{
                color: "black",
                fontSize: { md: "2.3rem", sm: "2rem", xs: "1.2rem" },
                borderRadius: 3,
                px: { md: 3 },
                my: { md: 4 },
              }}
            >
              Register
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={5}
          flexDirection="column"
          justifyContent={"center"}
          alignItems="center"
        >
          <IconButton text="start-up" icon={Rocket} />
          <IconButton text="Investor" icon={Investor} />
        </Grid>
        <Box
          component="img"
          src={bg}
          sx={{
            height: { xs: "100%", md: "auto" },
            backgroundSize: "cover",
            width: { xs: "auto", md: 1 },
            position: "absolute",
            top: 0,
            zIndex: -1,
            position: "fixed",
          }}
        />
      </Grid>
    </BgContainer>
  );
};

export default TakePart;
