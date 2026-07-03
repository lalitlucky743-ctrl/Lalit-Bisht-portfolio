import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import NavBar from "./components/UI/Navbar";
import Footer from "./components/UI/Footer";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";
import ProjectDetailPage from "./pages/ProjectDetail";
import BlogPage from "./pages/Blog";
import BlogDetailPage from "./pages/BlogDetail";
import ResumePage from "./pages/Resume";
import LoadingScreen from "./components/UI/LoadingScreen";
import CommandPalette from "./components/UI/CommandPalette";
import { COLORS } from "./utilities/constants";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('dark');
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(true);
      }
      if (e.key === 'Escape') {
        setIsCommandPaletteOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    document.body.className = theme === 'dark' ? 'light-mode' : 'dark-mode';
  };

  if (loading) return <LoadingScreen />;

  return (
    <Router>
      <div style={{ background: COLORS.bg, minHeight: "100vh" }}>
        <Analytics />
        <NavBar 
          toggleTheme={toggleTheme} 
          theme={theme} 
          setIsCommandPaletteOpen={setIsCommandPaletteOpen} 
        />
        <CommandPalette isOpen={isCommandPaletteOpen} setIsOpen={setIsCommandPaletteOpen} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;