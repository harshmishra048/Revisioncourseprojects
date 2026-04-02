import React from "react";
import assets from "../assets/assets";
import ThemeTogleBtn from "./ThemeTogleBtn";
import { motion } from "motion/react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ theme, setTheme }) => {
  const [sideBarOpen, setSideBarOpen] = React.useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // 🔥 Universal Scroll Handler
  const handleScroll = (id) => {
    setSideBarOpen(false);

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70"
    >
      {/* Logo */}
      <img
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        className="w-32 sm:w-40 cursor-pointer"
        alt="logo"
        onClick={() => navigate("/")}
      />

      {/* Menu */}
      <div
        className={`text-gray-700 dark:text-white sm:text-sm ${
          !sideBarOpen
            ? "max-sm:w-0 overflow-hidden"
            : "max-sm:w-60 max-sm:pl-10"
        }
        max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full
        max-sm:flex-col max-sm:bg-blue-600 max-sm:text-white max-sm:pt-20
        flex sm:items-center gap-5 transition-all`}
      >
        {/* Close button */}
        <img
          src={assets.close_icon}
          alt=""
          className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer"
          onClick={() => setSideBarOpen(false)}
        />

        {/* Links */}
        <button
          onClick={() => handleScroll("hero")}
          className="hover:opacity-80"
        >
          Home
        </button>

        <button
          onClick={() => handleScroll("services")}
          className="hover:opacity-80"
        >
          Services
        </button>

        <button
          onClick={() => handleScroll("our-work")}
          className="hover:opacity-80"
        >
          Our Work
        </button>

        <button
          onClick={() => handleScroll("contact-us")}
          className="hover:opacity-80"
        >
          Contact Us
        </button>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5 sm:gap-4">
        <ThemeTogleBtn theme={theme} setTheme={setTheme} />

        {/* Mobile Menu Icon */}
        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt=""
          onClick={() => setSideBarOpen(true)}
          className="w-8 sm:hidden cursor-pointer"
        />

        {/* Connect Button */}
        <button
          onClick={() => handleScroll("contact-us")}
          className="text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all"
        >
          Connect
          <img src={assets.arrow_icon} alt="" width={14} />
        </button>
      </div>
    </motion.div>
  );
};

export default Navbar;
