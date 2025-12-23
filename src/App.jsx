import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Courses from "./components/Courses";
import Students from "./components/Students";
import Grades from "./components/Grades";
import About from "./components/About";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { tableDarkTheme } from "./theme/tableDarkTheme";

function Menu() {
  const linkStyle = ({ isActive }) => ({
    padding: "8px 12px",
    borderRadius: "10px",
    border: isActive ? "2px solid white" : "1px solid rgba(255,255,255,0.2)",
    background: isActive ? "rgba(255,255,255,0.10)" : "transparent",
    color: "white",
    cursor: "pointer",
    fontWeight: isActive ? 700 : 500,
    textDecoration: "none",
    display: "inline-block",
  });

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        gap: "12px",
        padding: "12px 20px",
        boxSizing: "border-box",
        background: "rgba(0,0,0,0.35)",
        backdropFilter: "blur(6px)",
      }}
    >
      <NavLink to="/" style={linkStyle}>Home</NavLink>
      <NavLink to="/courses" style={linkStyle}>Matières</NavLink>
      <NavLink to="/students" style={linkStyle}>Etudiants</NavLink>
      <NavLink to="/grades" style={linkStyle}>Notes</NavLink>
      <NavLink to="/about" style={linkStyle}>A propos</NavLink>
    </nav>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={tableDarkTheme}>
      {/* reset + dark background */}
      <CssBaseline />

      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Menu />
        <Header />

        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/students" element={<Students />} />
            <Route path="/grades" element={<Grades />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

