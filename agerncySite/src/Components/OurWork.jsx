import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import { motion } from "motion/react";

const OurWork = () => {
  const workData = [
    {
      title: "Mobile app marketing",
      description:
        "We help businesses connect with their audience on social media platforms. From blog posts to social media posts, we help businesses build a strong online presence and drive engagement...",
      image: assets.work_mobile_app,
    },
    {
      title: "Dashboard Management",
      description:
        "We help businesses connect with their audience on social media platforms. From blog posts to social media posts, we help businesses build a strong online presence and drive engagement...",
      image: assets.work_dashboard_management,
    },
    {
      title: "Fitness and promotion",
      description:
        "We help businesses connect with their audience on social media platforms. From blog posts to social media posts, we help businesses build a strong online presence and drive engagement...",
      image: assets.work_fitness_app,
    },
  ];

  return (
    <motion.div
      id="our-work"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Title
          title="Our latest work"
          desc="Check out some of our latest work."
        />
      </motion.div>

      {/* Work Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.15 }}
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl"
      >
        {workData.map((work, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="hover:scale-102 duration-500 transition-all cursor-pointer"
          >
            <motion.img
              src={work.image}
              alt=""
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full rounded-xl"
            />
            <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
            <p className="text-sm opacity-60 w-5/6">{work.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default OurWork;
