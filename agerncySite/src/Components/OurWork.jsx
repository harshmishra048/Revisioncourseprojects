import React from "react";
import Title from "./Title";
import { ServicesData } from "../Data/ServicesData";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import assets from "../assets/assets";

const OurWork = () => {
  return (
    <div
      id="our-work"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Our latest work"
        desc="Check out some of our latest work."
      />

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {ServicesData.slice(0,3).map((work, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer"
          >
            <Link to={`/services/${work.slug}`}>
              <img
                src={work.image}
                className="w-full rounded-xl"
                alt={work.title}
              />

              <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>

              <p className="text-sm opacity-60 w-5/6">{work.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <Link to="/services">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-max gap-2 flex bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer"
        >
          View All Services
          <img src={assets.arrow_icon} alt="" className="w-4" />
        </motion.button>
      </Link>
    </div>
  );
};

export default OurWork;
