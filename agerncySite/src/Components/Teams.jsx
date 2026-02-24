import React, { useState } from "react";
import { teamData } from "../assets/assets";
import Title from "./Title";
import { motion, AnimatePresence } from "motion/react";

const Teams = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white"
      >
        <Title
          title="Meet the team"
          desc="A passionate team of digital experts dedicated to your brands success."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.12 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {teamData.map((team, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedMember(team)}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              className="
              cursor-pointer
              flex max-sm:flex-col items-center gap-5 p-4 rounded-xl
              border border-gray-100 dark:border-gray-700
              bg-white dark:bg-gray-900
              shadow-xl shadow-gray-100 dark:shadow-white/5
              transition-all"
            >
              <img
                src={team.image}
                alt={team.name}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div className="flex-1">
                <h3 className="font-bold text-sm">{team.name}</h3>

                <p className="text-xs opacity-60">{team.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedMember && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="fixed inset-0 bg-black z-40"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 40 }}
              transition={{ duration: 0.3 }}
              className="
              fixed inset-0 z-50
              flex items-center justify-center
              p-4"
            >
              <div
                className="
                w-full max-w-md
                bg-white dark:bg-neutral-900
                text-gray-800 dark:text-gray-200
                rounded-2xl
                shadow-2xl
                p-6
                relative
              "
              >
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 opacity-60 hover:opacity-100"
                >
                  ✕
                </button>

                <div className="flex flex-col items-center">
                  <img
                    src={selectedMember.image}
                    className="w-24 h-24 rounded-full mb-4 object-cover"
                  />

                  <h2 className="text-xl font-semibold">
                    {selectedMember.name}
                  </h2>

                  <p className="opacity-60 mb-4">{selectedMember.title}</p>
                </div>

                {selectedMember.bio && (
                  <p className="text-sm opacity-80 mb-4 text-center">
                    {selectedMember.bio}
                  </p>
                )}

                {selectedMember.skills && (
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2 text-sm">Skills</h3>

                    <div className="flex flex-wrap gap-2 justify-center">
                      {selectedMember.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="
                          px-3 py-1 text-xs rounded-full
                          bg-gray-200 dark:bg-neutral-800
                          "
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  className="
                  w-full mt-4 py-2 rounded-lg
                  bg-black text-white
                  dark:bg-white dark:text-black
                  "
                >
                  Contact Member
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Teams;
