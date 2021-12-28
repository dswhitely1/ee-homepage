import { CssBaseline } from "@material-ui/core";
import { StylesProvider, MuiThemeProvider } from "@material-ui/core/styles";
import { PropsWithChildren } from "react";
import theme from "./theme";

export const ThemeProvider = ({ children }: PropsWithChildren<unknown>) => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  </StylesProvider>
);

export default ThemeProvider;
