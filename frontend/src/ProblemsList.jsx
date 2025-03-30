import React, { useState } from "react";
import { motion } from "framer-motion";

const ProblemsList = ({ problems }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProblems = problems.filter((problem) => {
    const matchesSearch =
      problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      problem.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      problem.sheet.toLowerCase().includes(searchTerm.toLowerCase());

    if (activeFilter === "all") return matchesSearch;
    if (activeFilter === "completed") return matchesSearch && problem.completed;
    if (activeFilter === "pending") return matchesSearch && !problem.completed;

    return (
      matchesSearch &&
      problem.difficulty.toLowerCase() === activeFilter.toLowerCase()
    );
  });

  // Handle checkbox toggle
  const toggleCompletion = (id) => {
    // In a real app, you would update your state management here
    console.log(`Toggled completion for problem ${id}`);
  };

  return (
    <div className="space-y-6">
      {/* Search and filter controls */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2.5 border border-gray-700 rounded-lg bg-gray-800/50 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
            placeholder="Search by problem, tag, or sheet..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex space-x-2 overflow-x-auto pb-2 sm:pb-0">
          {["All", "Easy", "Medium", "Hard", "Completed", "Pending"].map(
            (filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter.toLowerCase())}
                className={`px-3 py-2 rounded-lg text-sm whitespace-nowrap ${
                  activeFilter === filter.toLowerCase()
                    ? "bg-blue-500 text-white"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
                }`}
              >
                {filter}
              </button>
            )
          )}
        </div>
      </div>

      {/* Problems list */}
      <div className="space-y-4">
        {filteredProblems.length === 0 ? (
          <div className="text-center py-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto text-gray-500 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-gray-500">
              No problems match your search criteria.
            </p>
          </div>
        ) : (
          filteredProblems.map((problem, idx) => (
            <motion.div
              key={problem.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="relative overflow-hidden rounded-xl bg-gray-800/20 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center p-5">
                {/* Completion checkbox */}
                <div className="absolute top-5 left-5">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      checked={problem.completed}
                      onChange={() => toggleCompletion(problem.id)}
                      className="form-checkbox h-5 w-5 text-blue-500 border-gray-600 rounded-md focus:ring-blue-500 focus:ring-opacity-25"
                    />
                  </label>
                </div>

                {/* Problem details */}
                <div className="pl-8 sm:pl-10 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-white">
                      {problem.title}
                    </h3>
                    <div
                      className={`inline-flex px-2.5 py-0.5 text-xs rounded-full ${
                        problem.difficulty === "Easy"
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : problem.difficulty === "Medium"
                            ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                            : "bg-red-500/20 text-red-400 border border-red-500/30"
                      }`}
                    >
                      {problem.difficulty}
                    </div>
                    <div className="inline-flex px-2.5 py-0.5 text-xs rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                      {problem.sheet}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {problem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex px-2 py-0.5 text-xs rounded-md bg-gray-700/50 text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="mt-4 sm:mt-0 flex items-center space-x-2 sm:space-x-3">
                  <a
                    href={problem.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 transition-colors duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                    <span className="text-xs font-medium">Solution</span>
                  </a>

                  <a
                    href={problem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    <span className="text-xs font-medium">Solve</span>
                  </a>
                </div>
              </div>

              {/* Progress indicator line */}
              {problem.completed && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-400"></div>
              )}
            </motion.div>
          ))
        )}
      </div>

      {/* Pagination (simplified) */}
      {filteredProblems.length > 0 && (
        <div className="flex justify-center mt-8">
          <nav className="flex items-center space-x-2">
            <button className="px-3 py-1 rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700">
              Previous
            </button>
            <button className="px-3 py-1 rounded-md bg-blue-500 text-white">
              1
            </button>
            <button className="px-3 py-1 rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700">
              2
            </button>
            <button className="px-3 py-1 rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700">
              3
            </button>
            <button className="px-3 py-1 rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700">
              Next
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default ProblemsList;
