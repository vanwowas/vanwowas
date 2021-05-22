const lightGrey = "#EFE8EC";
const white = "#ffffff";
const black = "#000000";
const primary = "#3F8379";
const secondary = "#E15D3F";
const tertiary = "#85CA93";
export type Colors = {
  pageBackground: string;
  headerBackground: string;
  card: {
    background: string;
    headline: string;
    description: string;
  };
  textColor: {
    primary: string;
    secondary: string;
    tertiary: string;
    white: string;
  };
  buttonBackground: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  border: {
    light: string;
    dark: string;
  };
  buttonText: {
    light: string;
    dark: string;
  };
  linkText: string;
};

const colors: Colors = {
  pageBackground: lightGrey,
  headerBackground: white,
  card: {
    background: primary,
    headline: tertiary,
    description: white
  },
  textColor: {
    primary,
    secondary,
    tertiary,
    white
  },
  buttonBackground: {
    primary,
    secondary,
    tertiary
  },
  border: {
    light: white,
    dark: black
  },
  buttonText: {
    dark: black,
    light: white
  },
  linkText: black
};

export default colors;
