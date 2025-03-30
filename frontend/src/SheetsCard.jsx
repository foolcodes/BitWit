import React from "react";
import { motion } from "framer-motion";

const SheetsCard = ({ details }) => {
  const { name, duration, problems, difficulty } = details;

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return "from-emerald-400 to-green-500";
      case "Intermediate":
        return "from-blue-400 to-indigo-500";
      case "Advanced":
        return "from-purple-400 to-fuchsia-500";
      case "Interview Prep":
        return "from-amber-400 to-orange-500";
      default:
        return "from-cyan-400 to-blue-500";
    }
  };

  const difficultyColor = getDifficultyColor(difficulty);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{
        y: -6,
        transition: { duration: 0.3 },
      }}
      className="relative h-full flex flex-col rounded-xl overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 shadow-lg"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-950/90 z-0" />

      <div
        className={`absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gradient-to-br ${difficultyColor} opacity-10 blur-xl`}
      ></div>

      <div className="relative z-10 p-6 flex-1 flex flex-col">
        <div className="mb-6">
          <div
            className={`h-1 w-16 rounded-full bg-gradient-to-r ${difficultyColor} mb-4`}
          ></div>
          <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
            {name}
          </h3>
          <div className="inline-block px-2.5 py-0.5 text-xs rounded-full bg-gray-800/70 text-gray-300 border border-gray-700/50">
            {difficulty}
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex items-center">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800/80 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-cyan-400"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m12 6 L12 12 L16 14"></path>
              </svg>
            </div>
            <span className="text-gray-300 text-sm">
              {duration} completion time
            </span>
          </div>

          <div className="flex items-center">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800/80 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-cyan-400"
              >
                <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                <path d="M9 3v18"></path>
                <path d="m16 15-3-3 3-3"></path>
              </svg>
            </div>
            <span className="text-gray-300 text-sm">
              {problems} coding problems
            </span>
          </div>
        </div>

        <div className="mt-auto">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-2.5 rounded-lg bg-gray-800 border border-gray-700/50 text-white font-medium text-sm flex items-center justify-center group transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:border-transparent"
          >
            <span>View Sheet</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default SheetsCard;
