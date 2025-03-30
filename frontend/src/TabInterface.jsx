import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProblemsList from "./ProblemsList";
import SheetsCard from "./SheetsCard";

const TabsContainer = () => {
  const [activeTab, setActiveTab] = useState("sheets");

  const sheets = [
    {
      name: "Strivers AtoZ Sheet",
      duration: "30hrs",
      problems: "455",
      difficulty: "Comprehensive",
    },
    {
      name: "Strivers SDE Sheet",
      duration: "30hrs",
      problems: "455",
      difficulty: "Advanced",
    },
    {
      name: "Strivers AtoZ Sheet",
      duration: "30hrs",
      problems: "455",
      difficulty: "Comprehensive",
    },
    {
      name: "Strivers Blind 75 Sheet",
      duration: "30hrs",
      problems: "455",
      difficulty: "Intermediate",
    },
    {
      name: "Strivers 79 Last Moment DSA Sheet",
      duration: "30hrs",
      problems: "455",
      difficulty: "Advanced",
    },
    {
      name: "GFG Sheet",
      duration: "30hrs",
      problems: "455",
      difficulty: "Varied",
    },
    {
      name: "Neetcode 150 Sheet",
      duration: "30hrs",
      problems: "150",
      difficulty: "Intermediate",
    },
    {
      name: "Neetcode 250 Sheet",
      duration: "30hrs",
      problems: "250",
      difficulty: "Advanced",
    },
    {
      name: "Neetcode All Sheet",
      duration: "30hrs",
      problems: "455",
      difficulty: "Comprehensive",
    },
    {
      name: "Neetcode Blind 75 Sheet",
      duration: "30hrs",
      problems: "455",
      difficulty: "Interview Prep",
    },
  ];

  const contests = [
    {
      name: "Weekly Contest 387",
      platform: "LeetCode",
      date: "Apr 06, 2025",
      duration: "1.5 hrs",
      difficulty: "Mixed",
    },
    {
      name: "Codeforces Round #912",
      platform: "Codeforces",
      date: "Apr 12, 2025",
      duration: "2 hrs",
      difficulty: "Advanced",
    },
    {
      name: "Google Kickstart Round A",
      platform: "Google",
      date: "Apr 15, 2025",
      duration: "3 hrs",
      difficulty: "Hard",
    },
    {
      name: "BiWeekly Contest 124",
      platform: "LeetCode",
      date: "Apr 20, 2025",
      duration: "1.5 hrs",
      difficulty: "Mixed",
    },
  ];

  const problems = [
    {
      id: "p1",
      title: "Two Sum",
      difficulty: "Easy",
      tags: ["Array", "Hash Table"],
      sheet: "Blind 75",
      completed: true,
      link: "https://leetcode.com/problems/two-sum/",
      youtubeLink: "https://youtube.com/watch?v=KLlXCFG5TnA",
    },
    {
      id: "p2",
      title: "Valid Parentheses",
      difficulty: "Easy",
      tags: ["Stack", "String"],
      sheet: "Neetcode 150",
      completed: false,
      link: "https://leetcode.com/problems/valid-parentheses/",
      youtubeLink: "https://youtube.com/watch?v=WTzjTskDFMg",
    },
    {
      id: "p3",
      title: "Merge K Sorted Lists",
      difficulty: "Hard",
      tags: ["Linked List", "Heap", "Divide and Conquer"],
      sheet: "Strivers SDE",
      completed: false,
      link: "https://leetcode.com/problems/merge-k-sorted-lists/",
      youtubeLink: "https://youtube.com/watch?v=q5a5OiGbT6Q",
    },
    {
      id: "p4",
      title: "LRU Cache",
      difficulty: "Medium",
      tags: ["Hash Table", "Linked List", "Design"],
      sheet: "Blind 75",
      completed: true,
      link: "https://leetcode.com/problems/lru-cache/",
      youtubeLink: "https://youtube.com/watch?v=7ABFKPK2hD4",
    },
    {
      id: "p5",
      title: "Climbing Stairs",
      difficulty: "Easy",
      tags: ["Dynamic Programming"],
      sheet: "Neetcode 150",
      completed: false,
      link: "https://leetcode.com/problems/climbing-stairs/",
      youtubeLink: "https://youtube.com/watch?v=Y0lT9Fck7qI",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 inline-block">
            BitWit
          </h1>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Your one-stop platform for structured learning and practice
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
            <button
              onClick={() => setActiveTab("sheets")}
              className={`relative px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeTab === "sheets"
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {activeTab === "sheets" && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 -z-10"
                  initial={false}
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              Problem Sheets
            </button>
            <button
              onClick={() => setActiveTab("problems")}
              className={`relative px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeTab === "problems"
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {activeTab === "problems" && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 -z-10"
                  initial={false}
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              Problems
            </button>
            <button
              onClick={() => setActiveTab("contests")}
              className={`relative px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeTab === "contests"
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {activeTab === "contests" && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 -z-10"
                  initial={false}
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              Contests
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "sheets" && (
            <motion.div
              key="sheets"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {sheets.map((item, idx) => (
                  <SheetsCard key={idx} details={item} />
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "problems" && (
            <motion.div
              key="problems"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ProblemsList problems={problems} />
            </motion.div>
          )}

          {activeTab === "contests" && (
            <motion.div
              key="contests"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contests.map((contest, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="relative overflow-hidden rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 p-6 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-blue-500/10 blur-xl"></div>

                    <div className="flex items-start justify-between">
                      <div>
                        <div className="inline-block px-2.5 py-0.5 text-xs rounded-full bg-gray-700/70 text-gray-300 border border-gray-600/50 mb-2">
                          {contest.platform}
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">
                          {contest.name}
                        </h3>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-cyan-400 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <span className="text-gray-300 text-sm">
                              {contest.date}
                            </span>
                          </div>

                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-cyan-400 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span className="text-gray-300 text-sm">
                              {contest.duration}
                            </span>
                          </div>

                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-cyan-400 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                              />
                            </svg>
                            <span className="text-gray-300 text-sm">
                              {contest.difficulty}
                            </span>
                          </div>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 rounded-lg bg-blue-500/20 border border-blue-500/30 text-blue-400"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </motion.button>
                    </div>

                    <div className="mt-6">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium text-sm flex items-center justify-center"
                      >
                        Register Now
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TabsContainer;
