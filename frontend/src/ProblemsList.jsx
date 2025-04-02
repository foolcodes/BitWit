import React, { useState } from "react";
import { motion } from "framer-motion";
import { Dices, ExternalLink, RefreshCcw, X } from "lucide-react";

const ProblemsList = ({ problems, toggleCheckBox, potd }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [randomProblem, setRandomProblem] = useState(null);
  const [showRandomProblem, setShowRandomProblem] = useState(false);
  const problemsPerPage = 20;

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

  // Random problem picker
  const pickRandomProblem = () => {
    if (filteredProblems.length === 0) return;

    const randomIndex = Math.floor(Math.random() * filteredProblems.length);
    setRandomProblem(filteredProblems[randomIndex]);
    setShowRandomProblem(true);
  };

  const closeRandomProblem = () => {
    setShowRandomProblem(false);
  };

  // Handle checkbox toggle
  const toggleCompletion = (id) => {
    toggleCheckBox(id);
  };

  // Pagination
  const totalPages = Math.ceil(filteredProblems.length / problemsPerPage);
  const paginatedProblems = filteredProblems.slice(
    (currentPage - 1) * problemsPerPage,
    currentPage * problemsPerPage
  );

  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  // Render a problem card (used for both POTD and regular problems)
  const renderProblemCard = (problem, isPOTD = false) => (
    <motion.div
      key={problem.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`relative overflow-hidden rounded-xl ${
        isPOTD
          ? "mb-4 bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/50 hover:border-purple-400/60"
          : "bg-gray-800/20 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/30"
      } transition-all duration-300`}
      style={
        isPOTD
          ? {
              background:
                "linear-gradient(to bottom right, rgba(12, 109, 161, 0.5), rgba(3, 8, 12, 0.5))",
              borderColor: "rgba(137, 201, 236, 0.5)",
            }
          : {}
      }
    >
      <div className="flex flex-col sm:flex-row sm:items-center p-5">
        {/* Problem details */}
        <div className={!isPOTD ? "flex-1 pl-10" : "flex-1"}>
          {/* checkbox */}
          {!isPOTD && (
            <div className="absolute top-5 left-5 ">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={problem.completed}
                  onChange={() => toggleCompletion(problem.id)}
                  className="form-checkbox h-5 w-5 text-blue-500 border-gray-600 rounded-md focus:ring-blue-500 focus:ring-opacity-25"
                />
              </label>
            </div>
          )}
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
          {problem.youtubeLink ? (
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
          ) : (
            <button
              disabled
              className="inline-flex items-center px-3 py-1.5 rounded-lg bg-gray-500/20 text-gray-400 border border-gray-500/30 cursor-not-allowed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1.5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
              <span className="text-xs font-medium">No Solution Available</span>
            </button>
          )}

          <a
            href={problem.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1.5 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-200"
            style={
              isPOTD
                ? {
                    backgroundColor: "rgba(5, 168, 255, 0.2)",
                    color: "#89c9ec",
                    borderColor: "rgba(5, 168, 255, 0.3)",
                  }
                : {}
            }
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
        <div
          className={`absolute bottom-0 left-0 right-0 h-1 ${
            isPOTD
              ? "bg-gradient-to-r from-purple-500 to-blue-400"
              : "bg-gradient-to-r from-green-500 to-emerald-400"
          }`}
          style={
            isPOTD
              ? {
                  background: "linear-gradient(to right, #0c6da1, #05a8ff)",
                }
              : {}
          }
        ></div>
      )}
    </motion.div>
  );

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-6 flex justify-center"
      >
        <div className="inline-block px-5 py-2 rounded-full text-sm font-semibold bg-indigo-900/30 text-indigo-200 border border-indigo-700/20 mb-5 backdrop-blur-sm">
          <span className="mr-2 inline-block w-2 h-2 rounded-full bg-cyan-400 pulse-glow"></span>
          Curated Problems from{" "}
          <span className="font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 inline-block bg-clip-text text-transparent">
            Top
          </span>{" "}
          Coding Sheets — Organized for{" "}
          <span className="font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 inline-block bg-clip-text text-transparent ">
            Maximum
          </span>{" "}
          Learning Efficiency
        </div>
      </motion.div>
      {/* POTD Section */}
      {potd && potd.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="h-px flex-1 bg-gradient-to-l from-blue-400 via-cyan-400 to-transparent"></div>
            <h2 className="mx-4 text-lg font-bold text-white">
              Problems of the Day
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-transparent"></div>
          </div>

          <div>{potd.map((potd) => renderProblemCard(potd, true))}</div>
        </div>
      )}

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

      {/* Random problem picker button */}
      <div className="flex justify-center">
        <button
          onClick={pickRandomProblem}
          disabled={filteredProblems.length === 0}
          className={`px-4 py-2 rounded-lg font-semibold text-white flex items-center ${
            filteredProblems.length === 0
              ? "bg-gray-700 cursor-not-allowed"
              : "bg-[#05a8ff] hover:bg-[#0c6da1] transition-colors duration-200"
          }`}
        >
          <span className="pr-3">
            <Dices />
          </span>
          Pick Random Problem
        </button>
      </div>

      {/* Random problem modal */}
      {showRandomProblem && randomProblem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-800 rounded-xl border border-gray-700 p-6 w-full max-w-xl"
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-white">Random Problem</h2>
              <button
                onClick={closeRandomProblem}
                className="text-gray-400 hover:text-white"
              >
                <X />
              </button>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-semibold text-white">
                  {randomProblem.title}
                </h3>
                <div
                  className={`inline-flex px-2.5 py-0.5 text-xs rounded-full ${
                    randomProblem.difficulty === "Easy"
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : randomProblem.difficulty === "Medium"
                        ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                        : "bg-red-500/20 text-red-400 border border-red-500/30"
                  }`}
                >
                  {randomProblem.difficulty}
                </div>
                <div className="inline-flex px-2.5 py-0.5 text-xs rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  {randomProblem.sheet}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {randomProblem.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex px-2 py-0.5 text-xs rounded-md bg-gray-700/50 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={randomProblem.completed}
                    onChange={() => toggleCompletion(randomProblem.id)}
                    className="h-5 w-5 text-blue-500 border-gray-600 rounded-md focus:ring-blue-500 focus:ring-opacity-25"
                  />
                  <span className="ml-2 text-gray-300">
                    {randomProblem.completed ? "Completed" : "Not completed"}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              {randomProblem.youtubeLink ? (
                <a
                  href={randomProblem.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex justify-center items-center px-4 py-2 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 transition-colors duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                  <span>Watch Solution</span>
                </a>
              ) : (
                <button
                  disabled
                  className="flex-1 flex justify-center items-center px-4 py-2 rounded-lg bg-gray-500/20 text-gray-400 border border-gray-500/30 cursor-not-allowed"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                  <span>No Solution Available</span>
                </button>
              )}

              <a
                href={randomProblem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex justify-center items-center px-4 py-2 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-200"
              >
                <span className="pr-2">
                  <ExternalLink size={19} />
                </span>
                <span>Solve Problem</span>
              </a>
            </div>

            <div className="mt-6 flex justify-center">
              <button
                onClick={pickRandomProblem}
                className="px-4 py-2 rounded-lg text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-200 flex items-center"
              >
                <span className="pr-2">
                  <RefreshCcw size={17} />
                </span>
                Pick Another Random Problem
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Problems list */}
      <div className="space-y-4">
        {paginatedProblems.length === 0 ? (
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
          paginatedProblems.map((problem, idx) => renderProblemCard(problem))
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg text-white ${
              currentPage === 1
                ? "bg-gray-700 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            Previous
          </button>

          <span className="text-gray-300 self-center">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg text-white ${
              currentPage === totalPages
                ? "bg-gray-700 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ProblemsList;
