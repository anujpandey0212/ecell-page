import { createTheme, touchRippleClasses } from "@mui/material";
import { textAlign } from "@mui/system";

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
