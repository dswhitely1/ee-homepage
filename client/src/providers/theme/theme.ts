import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

const palette = {
  primary: {
    main: "#670300",
  },
  secondary: {
    main: "#b48a66",
  },
  error: {
    main: "#a80400",
  },
  background: {
    default: "#fbf7f5",
  },
};

const bodyFontFamily = ["Lato", "Roboto", "Helvetica", "Arial", "sans-serif"];
const headingsFontFamily = [
  "Raleway",
  "Roboto",
  "Helvetica",
  "Arial",
  "sans-serif",
];

const typography = {
  fontFamily: bodyFontFamily.join(", "),
  h1: {
    fontFamily: headingsFontFamily.join(", "),
  },
  h2: {
    fontFamily: headingsFontFamily.join(", "),
  },
  h3: {
    fontFamily: headingsFontFamily.join(", "),
  },
  h4: {
    fontFamily: headingsFontFamily.join(", "),
  },
  h5: {
    fontFamily: headingsFontFamily.join(", "),
  },
  h6: {
    fontFamily: headingsFontFamily.join(", "),
  },
};

export default responsiveFontSizes(createTheme({ palette, typography }));
