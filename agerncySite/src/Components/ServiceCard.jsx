import React from "react";
import { motion } from "motion/react";

const ServiceCard = ({ service, index }) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [visible, setVisible] = React.useState(false);

  const divRef = React.useRef(null);

  const handleMouseMove = (e) => {
    const bound = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - bound.left,
      y: e.clientY - bound.top,
    });
  };

  return (
    <motion.div
      ref={divRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border
      border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100
      dark:shadow-white/10"
    >
      {/* Cursor glow */}
      <div
        className={`pointer-events-none blur-2xl rounded-full 
        bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 
        w-75 h-75 absolute z-0 transition-opacity duration-500 
        mix-blend-lighten ${visible ? "opacity-100" : "opacity-0"}`}
        style={{
          top: position.y - 150,
          left: position.x - 150,
        }}
      />

      {/* Card content */}
      <div
        className="flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5
        transition-all rounded-[10px] bg-white dark:bg-gray-900 
        z-10 relative"
      >
        <div className="bg-gray-100 dark:bg-gray-700 rounded-full">
          <img
            src={service.logo}
            alt=""
            className="max-w-24 bg-white dark:bg-gray-900 rounded-full m-2"
          />
        </div>

        <div className="flex-1">
          <h3 className="font-bold">{service.title}</h3>
          <p className="text-sm mt-2 opacity-80">{service.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
