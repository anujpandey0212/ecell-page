import { createTheme, touchRippleClasses } from "@mui/material";
import { textAlign } from "@mui/system";
import { createBreakpoints } from "@mui/system";

const breakpoints = createBreakpoints({});

const theme = createTheme({
  palette: {
    primary: {
      main: "#2D0F5B",
    },
    secondary: {
      main: "#13EEAC",
    },
  },
  typography: {
    fontFamily: ["Raleway", "Montserrat", "Poppins"].join(","),
    h2: {
      color: "white",
      fontFamily: "Poppins",
      [breakpoints.down("md")]: {
        textAlign: "center",
      },
      [breakpoints.down("sm")]: {
        fontSize: "1rem",
        textAlign: "center",
      },
    },
    h1: {
      fontFamily: "Poppins",
    },
    variants: [
      {
        props: { variant: "h2left" },
        style: {
          color: "white",
          textAlign: "center",
          color: "white",
          fontFamily: "Poppins",

          [breakpoints.down("md")]: {
            textAlign: "left",
          },
          [breakpoints.down("sm")]: {
            fontSize: "1rem",
            textAlign: "left",
          },
        },
      },
    ],
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false,
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "green" },
          style: {
            textTransform: "uppercase",
            backgroundColor: "#13EEAC",
            color: "#2D0F5B",
            padding: "0.6rem 1.2rem",
            fontWeight: "700",
            fontSize: "1.4rem",
            borderRadius: "10px",
            position: "relative",
            zIndex: 1,
            "&:hover": {
              backgroundColor: "#00d37b",
            },
          },
        },
      ],
    },
  },
});

export default theme;
