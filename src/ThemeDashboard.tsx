import { Switch } from "@material-ui/core";
import {
  deepOrange,
  deepPurple,
  lightBlue,
  orange,
} from "@material-ui/core/colors";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import React, { useState } from "react";

const ThemeDashboard = ({ children }: any) => {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? orange[500] : lightBlue[300];
  const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];
  const darkTheme = createTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Switch checked={darkState} onChange={handleThemeChange} />
      {children}
    </ThemeProvider>
  );
};

export default ThemeDashboard;
