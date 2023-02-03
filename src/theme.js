

// color design tokens export
export const colorTokens = {
    grey: {
      0: "#FFFFFF",
      10: "#F6F6F6",
      50: "#F0F0F0",
      100: "#E0E0E0",
      200: "#C2C2C2",
      300: "#A3A3A3",
      400: "#858585",
      500: "#666666",
      600: "#4D4D4D",
      700: "#333333",
      800: "#1A1A1A",
      900: "#0A0A0A",
      1000: "#000000",
    },
    primary: {
      50:  "#ff3000",
      100: "#162834",
      200: "#3d5663"
      
    },
  };
  
  // mui theme settings
  export const themeSettings = () => {
    const selectedFontFamily = "Roboto";
    return {
      palette: {
        orange:  colorTokens.primary[50],
        dark: colorTokens.primary[100],
        lightBlue: colorTokens.primary[200],
        white:colorTokens.grey[0],
        black:colorTokens.grey[1000],
        blackLessOpacity:"rgba(0, 0, 0, 0.6)",
        whiteLessOpacity:"rgba(255,255,255, 0.3)",
        blueLessOpacity:"rgba(61,86,99, 0.6)",
        

      
    },
      typography: {
        fontFamily: [selectedFontFamily, "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: [selectedFontFamily, "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: [selectedFontFamily, "sans-serif"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: [selectedFontFamily, "sans-serif"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: [selectedFontFamily, "sans-serif"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: [selectedFontFamily, "sans-serif"].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: [selectedFontFamily, "sans-serif"].join(","),
          fontSize: 14,
        },
      },
    };
  };