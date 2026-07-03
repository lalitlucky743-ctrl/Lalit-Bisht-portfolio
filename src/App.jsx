import { useState, useEffect } from "react";
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
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    // Local storage se theme load karo
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [projectId, setProjectId] = useState(null);
  const [blogId, setBlogId] = useState(null);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  // Theme change hone par local storage mein save karo
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme === 'dark' ? 'dark-mode' : 'light-mode';
  }, [theme]);

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
  };

  const navigateTo = (page, id = null) => {
    setCurrentPage(page);
    if (id) {
      if (page === "project") setProjectId(id);
      if (page === "blog") setBlogId(id);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <AboutPage />;
      case "projects":
        return <ProjectsPage navigateTo={navigateTo} />;
      case "project":
        return <ProjectDetailPage id={projectId} navigateTo={navigateTo} />;
      case "blog":
        return <BlogPage navigateTo={navigateTo} />;
      case "blogdetail":
        return <BlogDetailPage id={blogId} navigateTo={navigateTo} />;
      case "resume":
        return <ResumePage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  if (loading) return <LoadingScreen />;

  return (
    <div style={{ 
      background: theme === 'dark' ? COLORS.bg : '#f5f5f7', 
      minHeight: "100vh",
      transition: 'background 0.3s ease',
    }}>
      <Analytics />
      <NavBar 
        currentPage={currentPage}
        navigateTo={navigateTo} 
        toggleTheme={toggleTheme} 
        theme={theme} 
        setIsCommandPaletteOpen={setIsCommandPaletteOpen} 
      />
      <CommandPalette 
        isOpen={isCommandPaletteOpen} 
        setIsOpen={setIsCommandPaletteOpen}
        navigateTo={navigateTo}
        theme={theme}
      />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage + (projectId || '') + (blogId || '')}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
      
      <Footer theme={theme} />
    </div>
  );
}

export default App;