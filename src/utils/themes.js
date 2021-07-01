import React from "react";

export const themes = {
  light: {
    background: "#ccc",
    main_color: "#DCEBF1",
    secondary_color: "#37859F",
    accent_color: "#845EC2",
  },
  dark: {
    background: "#222",
    main_color: "#324B4C",
    secondary_color: "#068488",
    accent_color: "#00C6CF",
  },
};

export const ThemeContext = React.createContext(themes.light);
