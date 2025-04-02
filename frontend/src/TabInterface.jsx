import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProblemsList from "./ProblemsList";
import SheetsCard from "./SheetsCard";
import { neetcodeAll } from "./stores/neetcodeProblemsList";
import { v4 as uuid } from "uuid";
import { striversAtoZSheet } from "./stores/striversProblemsList";
import { gfgContest, gfgSdeSheet } from "./stores/gfgProblemsList";
import {
  leetcodeContests,
  codeforcesContests,
  codechefContests,
  hackerrankContests,
} from "./stores/contestList";
import { gfgPotd, leetcodePotd } from "./stores/potdList";

const TabsContainer = () => {
  const [activeTab, setActiveTab] = useState("sheets");
  const [problems, setProblems] = useState([]);
  const [contests, setContests] = useState([]);
  const [potds, setPotds] = useState([]);
  const [filteredContests, setFilteredContests] = useState([]);
  const [isContestsLoading, setIsContestsLoading] = useState(true);

  const [platformFilter, setPlatformFilter] = useState("All");

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const sheets = [
    {
      name: "Strivers AtoZ Sheet",
      duration: "270 hrs",
      problems: "455",
      difficulty: "Comprehensive",
      link: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2",
    },

    {
      name: "Neetcode 250 Sheet",
      duration: "140 hrs",
      problems: "250",
      difficulty: "Advanced",
      link: "https://neetcode.io/practice?tab=neetcode250",
    },

    {
      name: "TLE CP-31 Sheet",
      duration: "200 hrs",
      problems: "372",
      difficulty: "Advanced",
      link: "https://www.tle-eliminators.com/cp-sheet",
    },

    {
      name: "Neetcode All Sheet",
      duration: "410 hrs",
      problems: "793",
      difficulty: "Comprehensive",
      link: "https://neetcode.io/practice?tab=allNC",
    },

    {
      name: "Strivers 79 Sheet",
      duration: "50 hrs",
      problems: "79",
      difficulty: "Comprehensive",
      link: "https://takeuforward.org/interview-sheets/strivers-79-last-moment-dsa-sheet-ace-interviews",
    },
    {
      name: "Neetcode 150 Sheet",
      duration: "90 hrs",
      problems: "150",
      difficulty: "Intermediate",
      link: "https://neetcode.io/practice?tab=neetcode150",
    },

    {
      name: "Strivers Blind 75 Sheet",
      duration: "50 hrs",
      problems: "75",
      difficulty: "Interview Prep",
      link: "https://takeuforward.org/interviews/blind-75-leetcode-problems-detailed-video-solutions",
    },
    {
      name: "GFG Sheet",
      duration: "30 hrs",
      problems: "140",
      difficulty: "Advanced",
      link: "https://www.geeksforgeeks.org/sde-sheet-a-complete-guide-for-sde-preparation/?itm_source=geeksforgeeks&itm_medium=main_header&itm_campaign=practice_header",
    },
    {
      name: "Strivers SDE Sheet",
      duration: "110 hrs",
      problems: "191",
      difficulty: "Interview Prep",
      link: "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems",
    },
    {
      name: "Neetcode Blind 75 Sheet",
      duration: "50 hrs",
      problems: "75",
      difficulty: "Interview Prep",
      link: "https://neetcode.io/practice?tab=blind75",
    },
  ];

  const toggleCheckBox = (id) => {
    setProblems((prevProblems) => {
      const updatedProblems = prevProblems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      );

      // Update localStorage whenever a problem's completion status changes
      localStorage.setItem("problems", JSON.stringify(updatedProblems));

      return updatedProblems;
    });
  };

  // React example with react-router
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Scroll to top when the route changes

  // problems useEffect
  useEffect(() => {
    // fChecking if we have problems in localStorage
    const storedProblems = localStorage.getItem("problems");

    if (storedProblems) {
      // If we have stored problems, using those instead of fetching new ones
      setProblems(JSON.parse(storedProblems));
      return;
    }

    // If no stored problems, fetch them
    const fetchData = async () => {
      const neetcodeProblems = neetcodeAll();
      const striversProblems = await striversAtoZSheet();
      const gfgProblems = gfgSdeSheet();

      // Format Neetcode problems
      const formattedNeetcode = neetcodeProblems.map((item) => {
        const sheets = [];
        if (item.neetcode150) sheets.push("Neetcode 150");
        if (item.neetcode250) sheets.push("Neetcode 250");
        if (item.blind75) sheets.push("Blind 75");

        if (sheets.length === 0) sheets.push("Neetcode All");

        return {
          id: uuid(),
          title: item.problem,
          difficulty: item.difficulty,
          tags: [item.pattern],
          sheet: sheets.join(", "),
          completed: false,
          link: `https://leetcode.com/problems/${item.link}`,
          youtubeLink: `https://www.youtube.com/watch?v=${item.video}`,
        };
      });

      // Format Striver's A2Z problems
      const formattedStrivers = Array.isArray(striversProblems)
        ? striversProblems.flatMap((step) =>
            step.sub_steps.flatMap((subStep) =>
              subStep.topics.map((topic) => ({
                id: topic.id,
                title: topic.question_title,
                difficulty:
                  topic.difficulty === 0
                    ? "Easy"
                    : topic.difficulty === 1
                      ? "Medium"
                      : "Hard",
                tags: [subStep.sub_step_title],
                sheet: "Striver's A2Z",
                completed: false,
                link:
                  topic.lc_link ||
                  topic.gfg_link ||
                  topic.cs_link ||
                  topic.post_link, // LC > GFG > CodingNinjas > Blog
                youtubeLink: topic.yt_link || "",
              }))
            )
          )
        : [];

      // Format GFG SDE Sheet problems
      const formattedGfg = Array.isArray(gfgProblems)
        ? gfgProblems.map((item) => ({
            id: uuid(),
            title: item.title,
            difficulty: item.difficulty || "Unknown",
            tags: ["GFG SDE Sheet"],
            sheet: "GFG SDE Sheet",
            completed: false,
            link: item.link,
            youtubeLink: "",
          }))
        : [];

      const allProblems = shuffleArray([
        ...formattedGfg,
        ...formattedNeetcode,
        ...formattedStrivers,
      ]);

      // Update state
      setProblems(allProblems);
      localStorage.setItem("problems", JSON.stringify(allProblems));
    };

    fetchData();
  }, []);

  // potd useEffect
  useEffect(() => {
    const fetchData = async () => {
      const lcPOTD = await leetcodePotd();
      const gfgPOTD = await gfgPotd();

      const lcAbbrevation = lcPOTD.data.activeDailyCodingChallengeQuestion;
      const formattedLcPotd = {
        id: uuid(),
        title: lcAbbrevation.question.title,
        difficulty: lcAbbrevation.question.difficulty,
        tags: lcAbbrevation.question.topicTags.map((tag) => tag.name),
        sheet: "Leetcode",
        completed: false,
        link: "https://leetcode.com" + lcAbbrevation.link,
        yt_link: "",
      };

      const formattedGfgPotd = {
        id: uuid(),
        title: gfgPOTD.problem_name,
        difficulty: "Medium",
        tags: gfgPOTD.tags.topic_tags,
        sheet: "GFG",
        completed: false,
        link: gfgPOTD.problem_url,
        yt_link: "",
      };
      setPotds([formattedGfgPotd, formattedLcPotd]);
    };
    fetchData();
  }, []);

  // contests fetching useEffect below

  const calculateDuration = (start, end) => {
    const startTime = new Date(start);
    const endTime = new Date(end);
    const durationInMinutes = (endTime - startTime) / (1000 * 60);
    const hours = Math.floor(durationInMinutes / 60);
    const minutes = Math.floor(durationInMinutes % 60);

    return hours
      ? `${hours} hours${minutes > 0 ? ` ${minutes} minutes` : ""}`
      : `${minutes} minutes`;
  };

  useEffect(() => {
    const fetchContests = async () => {
      setIsContestsLoading(true);
      try {
        const gfgContestList = await gfgContest();
        const leetcodeContestList = await leetcodeContests();
        const codeforcesContestList = await codeforcesContests();
        const codechefContestsList = await codechefContests();
        const hackerrankContestsList = await hackerrankContests();

        const formattedHackerrankContests =
          hackerrankContestsList.data.events.ongoing_events.map(
            (eachContest) => {
              const startDate = new Date(eachContest.attributes.start_time);
              const endDate = new Date(eachContest.attributes.end_time);

              return {
                name: eachContest.attributes.name,
                platform: "HackerRank",
                description: eachContest.attributes.description,
                date: startDate.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }),
                rawDate: startDate,
                duration: calculateDuration(startDate, endDate),
                difficulty: "Mixed",
                link: eachContest.attributes.microsite_url,
              };
            }
          );

        const formattedGfgContests = gfgContestList.data.results.upcoming.map(
          (eachContest) => ({
            name: eachContest.name,
            platform: "GeeksforGeeks",
            date: eachContest.date,
            rawDate: new Date(eachContest.date),
            duration: calculateDuration(
              eachContest.start_time,
              eachContest.end_time
            ),
            difficulty: "Mixed",
            link:
              "https://practice.geeksforgeeks.org/contest/" + eachContest.slug,
          })
        );

        const formattedLeetcodeContests = leetcodeContestList.data.map(
          (eachContest) => {
            const startDate = new Date(eachContest.startTime);
            return {
              name: eachContest.name,
              platform: "LeetCode",
              date: startDate.toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }),
              rawDate: startDate,
              duration: eachContest.duration,
              difficulty: "Mixed",
              link: eachContest.url,
            };
          }
        );

        const formattedCodeForcesContests = codeforcesContestList.data.map(
          (eachContest) => {
            const hours = Math.floor(eachContest.durationSeconds / 3600);
            const minutes = (eachContest.durationSeconds % 3600) / 60;
            const startDate = new Date(eachContest.startTimeSeconds * 1000);

            return {
              name: eachContest.name,
              platform: "Codeforces",
              date: startDate.toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }),
              rawDate: startDate,
              duration: hours
                ? `${hours} hours${minutes ? ` ${minutes} minutes` : ""}`
                : `${minutes} minutes`,
              difficulty: "Hard",
              link: `https://codeforces.com/contests/${eachContest.id}`,
            };
          }
        );

        const formattedCodechefContests =
          codechefContestsList.future_contests.map((eachContest) => {
            const startDate = new Date(eachContest.contest_start_date_iso);
            return {
              name: eachContest.contest_name,
              platform: "CodeChef",
              date: startDate.toLocaleDateString("en-US", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              }),
              rawDate: startDate,
              duration: calculateDuration(
                eachContest.contest_start_date,
                eachContest.contest_end_date
              ),
              difficulty: "Easy",
              link: `https://www.codechef.com/${eachContest.contest_code}`,
            };
          });

        const allContests = [
          ...formattedGfgContests,
          ...formattedLeetcodeContests,
          ...formattedCodeForcesContests,
          ...formattedCodechefContests,
          ...formattedHackerrankContests,
        ];

        // Sorting contests by date
        const sortedContests = allContests.sort(
          (a, b) => a.rawDate - b.rawDate
        );

        setContests(sortedContests);
        setFilteredContests(sortedContests);
      } catch (error) {
        console.error("Error fetching contests:", error);
      } finally {
        setIsContestsLoading(false);
      }
    };

    fetchContests();
  }, []);

  // useEffect for whenver the contest filter changes
  useEffect(() => {
    let result = [...contests];

    if (platformFilter !== "All") {
      result = result.filter((contest) => contest.platform === platformFilter);
    }
    setFilteredContests(result);
  }, [contests, platformFilter]);

  return (
    <div className="min-h-screen bg-gray-950 py-16 px-4 sm:px-6 lg:px-8">
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
              <ProblemsList
                problems={problems}
                potd={potds}
                toggleCheckBox={toggleCheckBox}
              />
            </motion.div>
          )}

          {activeTab === "contests" && (
            <div className="flex flex-col">
              <div className="flex space-x-2 overflow-x-auto pb-2 sm:pb-0 mb-7 justify-center">
                {[
                  "All",
                  "LeetCode",
                  "GeeksforGeeks",
                  "Codeforces",
                  "CodeChef",
                  "HackerRank",
                ].map((filter) => (
                  <button
                    onClick={() => setPlatformFilter(filter)}
                    key={filter}
                    className={`px-3 py-2 rounded-lg text-sm whitespace-nowrap ${
                      platformFilter === filter
                        ? "bg-blue-500 text-white"
                        : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <motion.div
                key="contests"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {isContestsLoading ? (
                  <div className="flex flex-col items-center justify-center py-20">
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                    <p className="text-gray-400 font-medium">
                      Loading contests...
                    </p>
                  </div>
                ) : filteredContests.length === 0 ? (
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
                      No active contests for the specific platform
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredContests.map((contest, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="relative overflow-hidden rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 p-6 hover:border-blue-500/50 transition-all duration-300"
                      >
                        <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-blue-500/10 blur-xl"></div>

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

                        <div className="mt-6">
                          <motion.a
                            href={contest.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium text-sm flex items-center justify-center"
                          >
                            Register Now
                          </motion.a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TabsContainer;
