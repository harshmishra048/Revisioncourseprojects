import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";

const Services = () => {
  const servicesData = [
    {
      title: "Advertising",
      description:
        "We help businesses connect with their audience on social media platforms. From blog posts to social media posts, we help businesses build a strong online presence and drive engagement...",
      logo: assets.ads_icon,
    },
    {
      title: "Content Marketing",
      description:
        "We create engaging and informative content that resonates with your audience. From blog posts to social media posts, we help businesses build a strong online presence and drive engagement...",
      logo: assets.marketing_icon,
    },
    {
      title: "Content Writing",
      description:
        "We craft compelling and engaging content that resonates with your audience. From blog posts to social media posts, we help businesses build a strong online presence and drive engagement...",
      logo: assets.content_icon,
    },
    {
      title: "Social Media",
      description:
        "We help businesses connect with their audience on social media platforms. From blog posts to social media posts, we help businesses build a strong online presence and drive engagement...",
      logo: assets.social_icon,
    },
  ];

  return (
    <motion.div
      id="services"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />

      <Title
        title="How can we help ?"
        desc="We help businesses connect with their audience on social media platforms. From blog posts to social media posts, we help businesses build a strong online presence and drive engagement..."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
        className="flex flex-col md:grid grid-cols-2"
      >
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ServiceCard service={service} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
