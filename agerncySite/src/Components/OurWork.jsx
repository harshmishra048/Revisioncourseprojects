import React, { useState } from "react";
import Title from "./Title";
import assets from "../assets/assets";
import { motion, AnimatePresence } from "motion/react";

const OurWork = () => {
  const [selectedWork, setSelectedWork] = useState(null);

  const workData = [
    {
      title: "Web development",
      description:
        "We build professional, fast, and secure websites tailored to your business goals.",
      image: assets.web,

      fullDescription:
        "We create fully responsive, modern, and scalable websites using the latest technologies. Our focus is performance, security, SEO, and user experience to help your business grow online and establish a strong digital presence.",

      features: [
        "Responsive design for mobile, tablet, desktop",
        "High-performance and fast loading speed",
        "SEO-optimized structure",
        "Secure backend integration",
        "Modern and clean UI/UX",
      ],

      tools: ["React", "Tailwind CSS", "Node.js", "Firebase"],

      process: [
        "Requirement discussion",
        "UI/UX planning and design",
        "Development and integration",
        "Testing and optimization",
        "Deployment and support",
      ],
    },

    {
      title: "Canva Designing",
      description:
        "We create clean, modern, and visually engaging Canva designs.",
      image: assets.canvas,

      fullDescription:
        "We design professional brand creatives including social media posts, banners, business presentations, and marketing materials aligned with your brand identity to improve engagement and visual communication.",

      features: [
        "Social media post designs",
        "Ad banners and posters",
        "Business presentations",
        "Brand identity kits",
        "Marketing graphics",
      ],

      tools: ["Canva", "Photoshop", "Figma"],

      process: [
        "Understanding brand style",
        "Concept creation",
        "Design development",
        "Client feedback and revisions",
        "Final export and delivery",
      ],
    },

    {
      title: "Advertising & Promotions",
      description:
        "We deliver strategic advertising and promotion solutions to grow your brand.",
      image: assets.ads,

      fullDescription:
        "We help businesses increase visibility, attract customers, and grow faster through targeted digital advertising and promotional campaigns. Our focus is reaching the right audience with the right strategy for maximum results.",

      features: [
        "Social media ad campaign setup",
        "Audience targeting and optimization",
        "Creative ad design",
        "Brand awareness campaigns",
        "Performance tracking and improvement",
      ],

      tools: ["Meta Ads Manager", "Google Ads", "Canva", "Analytics tools"],

      process: [
        "Market and audience research",
        "Campaign planning",
        "Ad creative development",
        "Campaign launch",
        "Monitoring and optimization",
      ],
    },
  ];

  return (
    <>
      <motion.div
        id="our-work"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
      >
        {/* Title */}
        <Title
          title="Our latest work"
          desc="Check out some of our latest work."
        />

        {/* Cards */}
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
              onClick={() => setSelectedWork(work)}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="hover:scale-102 duration-500 transition-all cursor-pointer"
            >
              <img src={work.image} alt="" className="w-full rounded-xl" />

              <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>

              <p className="text-sm opacity-60 w-5/6">{work.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedWork && (
          <>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="fixed right-0 top-0 h-full w-full sm:w-105
  bg-white dark:bg-neutral-900
  text-gray-800 dark:text-gray-200
  z-50 shadow-2xl p-6 overflow-y-auto"
            >
              <button
                onClick={() => setSelectedWork(null)}
                className="mb-4 text-sm opacity-60 hover:opacity-100 transition"
              >
                ✕ Close
              </button>

              <img
                src={selectedWork.image}
                className="w-full rounded-lg mb-4"
              />

              <h2 className="text-2xl font-semibold mb-3">
                {selectedWork.title}
              </h2>

              <p className="opacity-80 mb-6 leading-relaxed">
                {selectedWork.fullDescription}
              </p>

              <div className="mb-6">
                <h3 className="font-semibold mb-2">Key Features</h3>

                <ul className="list-disc pl-5 space-y-1 opacity-80">
                  {selectedWork.features.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-2">Tools & Technologies</h3>

                <div className="flex flex-wrap gap-2">
                  {selectedWork.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="
          px-3 py-1 rounded-full text-sm
          bg-gray-200 text-gray-800
          dark:bg-neutral-800 dark:text-gray-200
          "
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold mb-2">Our Process</h3>

                <ol className="list-decimal pl-5 space-y-1 opacity-80">
                  {selectedWork.process.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>

              <button
                className="w-full py-3 rounded-lg font-medium bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition"
              >
                <a href="#contact-us">
                  Let's work together
                </a>
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default OurWork;
