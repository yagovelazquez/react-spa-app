import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  breakpoints: {
    sm: "700px",
    md: "960px",
    lg: "1100px",
    xl: "1200px",
    "2xl": "1536px",
  },
  styles: {},
  fonts: {
    body: "Neue Helvetica,helvetica,sans-serif",
    heading: "Neue Helvetica,helvetica,sans-serif",
    mono: "Neue Helvetica,helvetica,sans-serif",
  },
  textStyles: {
    buttonLabel: {
      fonts: "Neue Helvetica,helvetica,sans-serif",
      textTransform: "uppercase",
    },
  },
  colors: {
    blacks: {
      50: "RGBA(0, 0, 0, 0.04)",
      100: "RGBA(0, 0, 0, 0.06)",
      200: "RGBA(0, 0, 0, 0.08)",
      300: "RGBA(0, 0, 0, 0.16)",
      400: "RGBA(0, 0, 0, 0.24)",
      500: "RGBA(0, 0, 0, 0.36)",
      600: "RGBA(0, 0, 0, 0.48)",
      700: "RGBA(0, 0, 0, 0.64)",
      800: "RGBA(0, 0, 0, 0.80)",
      900: "RGBA(0, 0, 0, 0.92)",
    },
    white: {
      50: "RGBA(255, 255, 255, 0.04)",
    },
    black: {
      500: "black",
    },
  },

  components: {
    Checkbox: {
      baseStyle: {
        control: {
          _focus: {
            boxShadow: "none",
          },
        },
      },
    },
    Text: {
      variants: {
        italicTitle: {
          fontFamily: "Monotype Garamond,garamond,serif",
          letterSpacing: ".0238095238em",
          fontStyle: "italic",
          fontSize: "xl",
          fontWeight: "400",
        },

        normalText: {
          fontFamily: "Monotype Garamond,garamond,serif",
          letterSpacing: ".0277777778em",
          fontWeight: "400",
          fontSize: "md",
        },
        titleNormal: {
          fontFamily: "Neue Helvetica,helvetica,sans-serif",
          letterSpacing: ".25rem",
          fontSize: "xs",
          fontWeight: "700",
          textTransform: "uppercase",
        },

        titleSelected: {
          fontFamily: "Neue Helvetica,helvetica,sans-serif",
          letterSpacing: ".25rem",
          fontSize: "md",
          fontWeight: "700",
          textTransform: "uppercase",
        },

        formText: {
          fontFamily: "Garamond,Baskerville,Caslon,serif",
        },
      },
    },
  },
});
