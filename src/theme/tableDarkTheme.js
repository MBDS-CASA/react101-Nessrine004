import { createTheme } from "@mui/material/styles";

export const tableDarkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0b0b0b",
      paper: "#161616",
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255,255,255,0.7)",
    },
    divider: "rgba(255,255,255,0.12)",
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          backgroundImage: "none",
          backgroundColor: "#161616",
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          backgroundColor: "#161616",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: "#0f0f0f",
          color: "#fff",
          fontWeight: 700,
          borderBottom: "1px solid rgba(255,255,255,0.18)",
        },
        body: {
          color: "rgba(255,255,255,0.92)",
          borderBottom: "1px solid rgba(255,255,255,0.12)",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.06)",
          },
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          borderTop: "1px solid rgba(255,255,255,0.12)",
        },
      },
    },
  },
});
