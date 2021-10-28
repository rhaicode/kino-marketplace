import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#3B82F6",
    primaryLight: "#BFDBFE",
    primaryDark: "#1E40AF",
    secondary: "#6366F1",
    secondaryLight: "#A5B4FC",
    secondaryDark: "#3730A3",
    headers: "#F9FAFB",
    subHeaders: "#E5E7EB",
    placeholders: "#374151",
    iconsActive: "#F9FAFB",
    iconsInactive: "#6B7280",
    accentSurface: "#010210",
    accentCard: "#151D2C",
    accentOutlines: "#374151",
    error: "#EF4444",
    success: "#FECACA",
    dark: "#141414",
  },
  fonts: {
    body: "'Poppins', sans-serif",
  },
  fontSizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
    "6xl": "3.75rem", //
  },
  styles: {
    global: {
      html: {
        "--scrollbarBG": "#2B333B",
        "--thumbBG": "#9CA8B4",
      },
      "::selection": {
        color: "white",
        backgroundColor: "#141414",
      },
      ".underline": {
        width: "100%",
        height: "5px",
        borderRadius: "4px",
        position: "absolute",
        top: "-16px",
        marginLeft: "auto",
        marginRight: "auto",
      },
      ".tools img": {
        margin: "1.5rem",
        userSelect: "none",
      },
      body: {
        scrollbarWidth: "thin",
        scrollbarColor: "var(--thumbBG) var(--scrollbarBG)",
        overflow: "overlay",
      },
      "body::-webkit-scrollbar": {
        width: "11px",
      },
      "body::-webkit-scrollbar-track": {
        backgroundColor: "transparent",
      },
      "body::-webkit-scrollbar-thumb": {
        backgroundColor: "var(--thumbBG)",
        border: "2px solid transparent",
        borderRadius: "8px",
        backgroundClip: "content-box",
      },
    },
  },
});

export default theme;
