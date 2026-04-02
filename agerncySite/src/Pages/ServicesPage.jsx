import React, { useState } from "react";
import { ServicesData } from "../Data/ServicesData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServicesPage = () => {
  const [search, setSearch] = useState("");

  // 🔍 Smart Search (start + middle + end match)
  const filteredServices = ServicesData.filter((service) =>
    service.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-6 md:px-20 py-20"
    >
      {/* Title */}
      <h1 className="text-5xl font-bold mb-8 text-center">All Services</h1>

      {/* 🔍 Search Bar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="flex justify-center mb-12"
      >
        <input
          type="text"
          placeholder="Search services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-5 py-3 rounded-full border border-gray-300 
          dark:border-neutral-700 bg-white dark:bg-neutral-900 
          focus:outline-none focus:ring-2 focus:ring-primary transition-all"
        />
      </motion.div>

      {/* ❌ No Result Animation */}
      {filteredServices.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-500"
        >
          No services found 😢
        </motion.p>
      )}

      {/* 🔥 Cards Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredServices.map((service, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <Link to={`/services/${service.slug}`}>
              <div className="cursor-pointer group">
                {/* Image */}
                <div className="overflow-hidden rounded-lg">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="mb-3"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Content */}
                <h3 className="font-semibold group-hover:text-primary transition">
                  {service.title}
                </h3>

                <p className="text-sm opacity-60">{service.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ServicesPage;
