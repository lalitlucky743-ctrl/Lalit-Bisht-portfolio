import { useState, useEffect } from "react";
import NavBar from "./components/UI/Navbar";
import Footer from "./components/UI/Footer";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";
import LoadingScreen from "./components/UI/LoadingScreen";
// import CustomCursor from "./components/UI/CustomCursor";  // 🔥 Comment karo
import { COLORS } from "./utilities/constants";
import "./App.css";

export default function App() {
  const [page, setPage] = useState(() => window.location.hash.replace("#", "") || "home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const onHashChange = () => {
      const next = window.location.hash.replace("#", "") || "home";
      setPage(next);
    };
    window.addEventListener("hashchange", onHashChange);
    if (!window.location.hash) window.location.hash = "home";
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    document.body.className = theme === 'dark' ? 'light-mode' : 'dark-mode';
  };

  let content;
  if (page === "about") content = <AboutPage />;
  else if (page === "projects") content = <ProjectsPage />;
  else if (page === "contact") content = <ContactPage />;
  else content = <HomePage setPage={setPage} />;

  if (loading) return <LoadingScreen />;

  return (
    <div style={{ background: COLORS.bg, minHeight: "100vh" }}>
      {/* <CustomCursor /> */}  {/* 🔥 Comment karo */}
      <NavBar page={page} setPage={setPage} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} toggleTheme={toggleTheme} theme={theme} />
      {content}
      <Footer />
    </div>
  );
}