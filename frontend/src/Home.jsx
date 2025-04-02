import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";

import LampEffect from "./components/ui/LampEffect/LampEffect";

import {
  Calendar,
  Code,
  Award,
  Bookmark,
  TrendingUp,
  Clock,
  PieChart,
  Users,
  ChevronRight,
  Trophy,
  Building,
  Zap,
  Bell,
  ExternalLink,
  Play,
  Navigation,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const threeJsRef = useRef(null);
  const statsRef = useRef(null);
  const featuresRef = useRef(null);
  const contestsRef = useRef(null);
  const problemsRef = useRef(null);
  const ctaRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("upcoming");

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const cardFade = (idx) => ({
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 * idx, duration: 0.5 },
    },
  });

  const upcomingContests = [
    {
      id: 1,
      name: "Codeforces Round #802",
      platform: "Codeforces",
      date: "Mar 23, 2025",
      time: "19:30 UTC",
      duration: "2.5 hours",
      participants: 12500,
    },
    {
      id: 2,
      name: "LeetCode Weekly Contest 337",
      platform: "LeetCode",
      date: "Mar 24, 2025",
      time: "02:30 UTC",
      duration: "1.5 hours",
      participants: 8750,
    },
    {
      id: 3,
      name: "CodeChef Starters 80",
      platform: "CodeChef",
      date: "Mar 25, 2025",
      time: "14:30 UTC",
      duration: "3 hours",
      participants: 5230,
    },
    {
      id: 4,
      name: "AtCoder Beginner Contest 293",
      platform: "AtCoder",
      date: "Mar 26, 2025",
      time: "12:00 UTC",
      duration: "2 hours",
      participants: 4800,
    },
  ];

  const pastContests = [
    {
      id: 1,
      name: "Codeforces Round #801",
      platform: "Codeforces",
      date: "Mar 19, 2025",
      participants: 14320,
      winner: "tourist",
    },
    {
      id: 2,
      name: "LeetCode Weekly Contest 336",
      platform: "LeetCode",
      date: "Mar 17, 2025",
      participants: 9105,
      winner: "lee215",
    },
    {
      id: 3,
      name: "HackerRank CodeSprint",
      platform: "HackerRank",
      date: "Mar 15, 2025",
      participants: 6450,
      winner: "blazingcode",
    },
  ];

  const featuredProblems = [
    {
      id: 1,
      title: "Dynamic Programming Challenge",
      difficulty: "Hard",
      platform: "GeeksforGeeks",
      solvedCount: 458,
      tags: ["dp", "arrays"],
      link: "https://www.geeksforgeeks.org/dynamic-programming/",
    },
    {
      id: 2,
      title: "Graph Traversal Optimization",
      difficulty: "Medium",
      platform: "Codeforces",
      solvedCount: 1024,
      tags: ["graphs", "bfs", "dfs"],
      link: "https://codeforces.com/problemset?tags=graphs",
    },
    {
      id: 3,
      title: "Binary Tree Balancing",
      difficulty: "Easy",
      platform: "LeetCode",
      solvedCount: 2356,
      tags: ["trees", "recursion"],
      link: "https://leetcode.com/problems/balanced-binary-tree/",
    },
    {
      id: 4,
      title: "Two Sum",
      difficulty: "Easy",
      platform: "LeetCode",
      solvedCount: 160000,
      tags: ["Array", "Hash Table"],
      link: "https://leetcode.com/problems/two-sum/",
    },
  ];

  const trendingProblems = [
    {
      id: 1,
      title: "String Permutations",
      difficulty: "Medium",
      platform: "LeetCode",
      solvedCount: 3641,
      tags: ["strings", "backtracking"],
      link: "https://leetcode.com/problems/permutations/",
    },
    {
      id: 2,
      title: "Matrix Exponentiation",
      difficulty: "Medium",
      platform: "Codeforces",
      solvedCount: 1587,
      tags: ["matrices", "optimization"],
      link: "https://codeforces.com/problemset/problem/1234/D",
    },
    {
      id: 3,
      title: "Segment Tree for Range Queries",
      difficulty: "Hard",
      platform: "CodeChef",
      solvedCount: 852,
      tags: ["data structures", "trees"],
      link: "https://www.codechef.com/problems/RANGEQ",
    },
  ];

  const platformColors = {
    Codeforces: "bg-gradient-to-r from-blue-600 to-blue-700",
    LeetCode: "bg-gradient-to-r from-amber-500 to-amber-600",
    CodeChef: "bg-gradient-to-r from-red-600 to-red-700",
    GeeksforGeeks: "bg-gradient-to-r from-green-600 to-green-700",
    HackerRank: "bg-gradient-to-r from-teal-600 to-teal-700",
  };

  const difficultyColors = {
    Easy: "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white",
    Medium: "bg-gradient-to-r from-amber-500 to-amber-600 text-black",
    Hard: "bg-gradient-to-r from-rose-500 to-rose-600 text-white",
  };

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);

    if (!threeJsRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / 600,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, 600);
    renderer.setClearColor(0x000000, 0);
    threeJsRef.current.appendChild(renderer.domElement);

    const particleColors = [0x4b8bbe, 0x00599c, 0xed8b00, 0xf7df1e];
    const particles = [];
    const particleCount = 500;

    for (let i = 0; i < particleCount; i++) {
      const geometry = new THREE.SphereGeometry(0.1, 8, 8);
      const color =
        particleColors[Math.floor(Math.random() * particleColors.length)];
      const material = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.7,
      });

      const particle = new THREE.Mesh(geometry, material);
      particle.position.x = (Math.random() - 0.5) * 60;
      particle.position.y = (Math.random() - 0.5) * 40;
      particle.position.z = (Math.random() - 0.5) * 60;

      particle.userData = {
        speed: {
          x: (Math.random() - 0.5) * 0.1,
          y: (Math.random() - 0.5) * 0.1,
          z: (Math.random() - 0.5) * 0.1,
        },
        pulse: Math.random() * Math.PI * 2,
      };

      scene.add(particle);
      particles.push(particle);
    }

    camera.position.z = 40;
    camera.position.y = 5;
    camera.rotation.x = -0.1;
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const animate = () => {
      requestAnimationFrame(animate);

      particles.forEach((particle) => {
        const { speed, pulse } = particle.userData;

        particle.position.x += speed.x;
        particle.position.y += speed.y;
        particle.position.z += speed.z;

        particle.material.opacity =
          0.4 + 0.3 * Math.sin(Date.now() * 0.002 + pulse);

        if (Math.abs(particle.position.x) > 60) particle.position.x *= -0.95;
        if (Math.abs(particle.position.y) > 40) particle.position.y *= -0.95;
        if (Math.abs(particle.position.z) > 60) particle.position.z *= -0.95;
      });

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#080510,#1e1b4b,#080510)] opacity-40 bg-[length:300%_100%] animate-gradient-x -z-10"></div>

      {/* Background Space Animation */}
      <div className="relative h-screen flex items-center justify-center">
        <div
          ref={threeJsRef}
          className="absolute inset-0 w-full h-full opacity-60"
        />

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-6"
          >
            <div className="inline-block px-5 py-2 rounded-full text-sm font-semibold bg-indigo-900/30 text-indigo-200 border border-indigo-700/20 mb-5 backdrop-blur-sm">
              <span className="mr-2 inline-block w-2 h-2 rounded-full bg-cyan-400 pulse-glow"></span>
              The Ultimate Competitive Programming Hub
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="animate-gradient text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#89c9ec] via-[#05a8ff] to-[#0c6da1] tracking-tight"
          >
            BitWit
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl font-medium text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Your unified platform for competitive programming success across all{" "}
            <span className="text-cyan-400 font-bold">
              major coding platforms
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <Button
              onClick={() => navigate("/problems-contests")}
              size="lg"
              className="bg-gradient-to-r from-[#0c6da1] to-[#05a8ff] text-white px-8 py-6 font-medium text-base rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-[0_20px_80px_-10px_rgba(12,109,161,1)] border-0 cursor-pointer"
            >
              Get Started
            </Button>
          </motion.div>

          {/* Featured platforms */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 text-gray-400 mb-14"
          >
            <p className="text-xs uppercase tracking-wider mb-4 font-medium">
              Integrated with all major platforms
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400"
        >
          <span className="text-sm mb-2 font-light tracking-wide">
            Scroll to explore
          </span>
          <div className="w-6 h-10 border border-gray-500 rounded-full flex justify-center p-1">
            <motion.div
              className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div
        ref={statsRef}
        className="max-w-6xl mx-auto px-4 py-16 -mt-24 relative z-20"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
          {[
            {
              icon: <Trophy className="h-6 w-6 text-amber-400" />,
              value: "10+",
              label: "Weekly Contests",
            },
            {
              icon: <Users className="h-6 w-6 text-indigo-400" />,
              value: "98%",
              label: "Success Rate",
            },
            {
              icon: <Building className="h-6 w-6 text-emerald-400" />,
              value: "4+",
              label: "Platforms",
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-gray-800/30 backdrop-blur-md border border-gray-700/40 rounded-xl p-6 text-center transform transition-all duration-300 hover:shadow-[0_0_30px_rgba(12,109,161,0.15)] hover:border-gray-600/50"
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-full bg-gray-700/30 border border-gray-600/20">
                  {stat.icon}
                </div>
              </div>
              <h3 className="stat-value text-2xl md:text-3xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                {stat.value}
              </h3>
              <p className="text-gray-400 text-sm font-medium tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Features Sectio */}

        <LampEffect>
          <div className="relative mt-5 z-10">
            <motion.div
              ref={featuresRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-24"
            >
              <div className="text-center mb-16">
                <motion.h2
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text 3xl md:text-5xl font-bold mb-7 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300"
                >
                  Why Choose BitWit?
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-gray-400 max-w-2xl mx-auto text-lg"
                >
                  Your complete toolkit for mastering competitive programming
                  with all the POTD and contests at a unified space
                </motion.p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Code className="h-8 w-8 text-cyan-400" />,
                    title: "Unified Dashboard",
                    description:
                      "Access problems from LeetCode, Codeforces, HackerRank and more - all in one seamless interface",
                  },

                  {
                    icon: <TrendingUp className="h-8 w-8 text-purple-400" />,
                    title: "Smart Analytics",
                    description:
                      "Track your progress with detailed insights and performance metrics tailored to your goals",
                  },
                  {
                    icon: <Zap className="h-8 w-8 text-yellow-400" />,
                    title: "Speed Challenges",
                    description:
                      "Boost your coding efficiency by saving time and energy—no more jumping between sites. Focus on what truly matters!",
                  },
                  {
                    icon: <PieChart className="h-8 w-8 text-rose-400" />,
                    title: "Skill Assessment",
                    description:
                      "Identify strengths and weaknesses with precision",
                  },
                  {
                    icon: <Calendar className="h-8 w-8 text-amber-400" />,
                    title: "Contest Tracker",
                    description:
                      "Stay ahead with contest recommendations and scheduling based on your skill level",
                  },
                  {
                    icon: <Award className="h-8 w-8 text-emerald-400" />,
                    title: "Learning Paths",
                    description:
                      "Follow curated problem sets designed by competitive programming champions",
                  },

                  ,
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-50px" }}
                    whileHover={{
                      scale: 1.02,
                    }}
                    className="feature-card bg-gray-800/20 backdrop-blur-md p-8 rounded-xl border border-gray-700/40 transition-all duration-300 group hover:border-indigo-500/30 hover:bg-gray-800/40 hover:shadow-[0_12px_40px_-10px_rgba(99,102,241,0.4)]"
                  >
                    <motion.div
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      className="mb-5 bg-gray-800/40 w-16 h-16 rounded-lg border border-gray-700/40 flex items-center justify-center group-hover:border-indigo-500/30 group-hover:bg-indigo-900/20 transition-all duration-300"
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </LampEffect>

        {/* Upcoming Contests Section */}
        <motion.div
          ref={contestsRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-secondary/40 text-primary border border-secondary/30 mb-4">
              COMPETITIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text">
              Never Miss a Contest
            </h2>
            <p className="text-text/80 max-w-2xl mx-auto">
              Stay updated with upcoming contests from all major competitive
              programming platforms
            </p>
          </div>

          <Tabs
            defaultValue="upcoming"
            className="mb-8"
            onValueChange={setActiveTab}
          >
            <div className="flex justify-center mb-8">
              <TabsList className="bg-background/80 border border-secondary/20 p-1">
                <TabsTrigger
                  value="upcoming"
                  className="data-[state=active]:bg-accent data-[state=active]:text-background px-6 py-2"
                >
                  Upcoming
                </TabsTrigger>
                <TabsTrigger
                  value="past"
                  className="data-[state=active]:bg-accent data-[state=active]:text-background px-6 py-2"
                >
                  Past Results
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="upcoming" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {isLoading
                  ? Array(4)
                      .fill(0)
                      .map((_, idx) => (
                        <div
                          key={idx}
                          className="bg-secondary/10 rounded-xl h-64 animate-pulse"
                        />
                      ))
                  : upcomingContests.map((contest, idx) => (
                      <motion.div
                        key={contest.id}
                        className="contest-card"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 * idx }}
                        whileHover={{
                          scale: 1.03,
                          transition: { duration: 0.2 },
                        }}
                      >
                        <Card className="bg-secondary/10 backdrop-blur-sm border-secondary/20 h-full hover:border-accent/50 transition-all duration-300">
                          <CardContent className="p-5">
                            <Badge
                              className={`${platformColors[contest.platform] || "bg-secondary"} shadow-lg`}
                              variant="secondary"
                            >
                              {contest.platform}
                            </Badge>
                            <h3 className="text-lg font-semibold mt-4 mb-3 text-text">
                              {contest.name}
                            </h3>

                            <div className="flex items-center text-sm text-text/70 mb-2">
                              <Calendar className="h-4 w-4 mr-2" />
                              <span>{contest.date}</span>
                            </div>
                            <div className="flex items-center text-sm text-text/70 mb-2">
                              <Clock className="h-4 w-4 mr-2" />
                              <span>
                                {contest.time} • {contest.duration}
                              </span>
                            </div>
                            <div className="flex items-center text-sm text-text/70 mb-4">
                              <Users className="h-4 w-4 mr-2" />
                              <span>
                                {contest.participants.toLocaleString()}{" "}
                                participants
                              </span>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full border-primary/40 hover:bg-primary/10 text-primary"
                            >
                              <Bell className="h-4 w-4 mr-2" />
                              Set Reminder
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
              </div>
            </TabsContent>

            <TabsContent value="past" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {isLoading
                  ? Array(3)
                      .fill(0)
                      .map((_, idx) => (
                        <div
                          key={idx}
                          className="bg-secondary/10 rounded-xl h-56 animate-pulse"
                        />
                      ))
                  : pastContests.map((contest, idx) => (
                      <motion.div
                        key={contest.id}
                        className="contest-card"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 * idx }}
                        whileHover={{
                          scale: 1.03,
                          transition: { duration: 0.2 },
                        }}
                      >
                        <Card className="bg-secondary/10 backdrop-blur-sm border-secondary/20 h-full hover:border-accent/50 transition-all duration-300">
                          <CardContent className="p-5">
                            <Badge
                              className={`${platformColors[contest.platform] || "bg-secondary"} shadow-lg`}
                              variant="secondary"
                            >
                              {contest.platform}
                            </Badge>
                            <h3 className="text-lg font-semibold mt-4 mb-3 text-text">
                              {contest.name}
                            </h3>
                            <div className="flex items-center text-sm text-text/70 mb-2">
                              <Calendar className="h-4 w-4 mr-2" />
                              <span>{contest.date}</span>
                            </div>
                            <div className="flex items-center text-sm text-text/70 mb-2">
                              <Users className="h-4 w-4 mr-2" />
                              <span>
                                {contest.participants.toLocaleString()}{" "}
                                participants
                              </span>
                            </div>
                            <div className="flex items-center text-sm font-medium text-accent mb-4">
                              <Award className="h-4 w-4 mr-2" />
                              <span>Winner: {contest.winner}</span>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full border-primary/40 hover:bg-primary/10 text-primary"
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              View Results
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
              </div>
            </TabsContent>
          </Tabs>
          <div className="flex justify-center">
            <Button
              variant="outline"
              className="border-gray-700/50 hover:bg-gray-800/50 text-white group"
            >
              View All Contests
              <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>

        {/* Featured Problems Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="mb-24"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-rose-900/40 text-rose-300 border border-rose-800/30 mb-4">
              PROBLEM SETS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Featured Problems
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hand-picked problems to improve your algorithmic thinking and
              problem-solving skills
            </p>
          </motion.div>

          {/* Tabs */}
          <Tabs defaultValue="featured" className="mb-8">
            <motion.div
              variants={fadeInUp}
              className="flex justify-center mb-8"
            >
              <TabsList className="bg-gray-800/50 border border-gray-700/50 p-1">
                <TabsTrigger
                  value="featured"
                  className="data-[state=active]:bg-[#05a8ff] data-[state=active]:text-white px-6 py-2"
                >
                  Featured
                </TabsTrigger>
                <TabsTrigger
                  value="trending"
                  className="data-[state=active]:bg-[#05a8ff] data-[state=active]:text-white px-6 py-2"
                >
                  Trending
                </TabsTrigger>
              </TabsList>
            </motion.div>

            {/* Featured Content */}
            <TabsContent value="featured" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {isLoading
                  ? Array(4)
                      .fill(0)
                      .map((_, idx) => (
                        <div
                          key={idx}
                          className="bg-gray-800/30 rounded-xl h-48 animate-pulse"
                        />
                      ))
                  : featuredProblems.map((problem, idx) => (
                      <motion.div
                        key={problem.id}
                        variants={cardFade(idx)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className="problem-card"
                      >
                        <Card className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-[0_12px_40px_-10px_rgba(99,102,241,0.4)]">
                          <CardContent className="p-5">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h3 className="text-lg font-semibold mb-1">
                                  {problem.title}
                                </h3>
                                <Badge
                                  className={`${platformColors[problem.platform] || "bg-gray-600"} shadow-md`}
                                  variant="secondary"
                                >
                                  {problem.platform}
                                </Badge>
                              </div>
                              <Badge
                                className={`${difficultyColors[problem.difficulty] || "bg-gray-600"} shadow-md`}
                                variant="secondary"
                              >
                                {problem.difficulty}
                              </Badge>
                            </div>
                            <div className="flex items-center text-sm text-gray-400 mb-3">
                              <Code className="h-4 w-4 mr-2" />
                              <span>
                                {problem.solvedCount.toLocaleString()} solutions
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {problem.tags.map((tag, tagIdx) => (
                                <span
                                  key={tagIdx}
                                  className="px-2 py-1 bg-gray-700/50 rounded-md text-xs text-gray-300"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <Button
                              onClick={() =>
                                (window.location.href = problem.link)
                              }
                              variant="outline"
                              size="sm"
                              className="w-full border-[#0c6da1] hover:bg-[#0c6da1] text-white"
                            >
                              <Navigation className="h-4 w-4 mr-2" /> Solve
                              Problem
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
              </div>
            </TabsContent>

            {/* Trending Content */}
            <TabsContent value="trending" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {isLoading
                  ? Array(3)
                      .fill(0)
                      .map((_, idx) => (
                        <div
                          key={idx}
                          className="bg-gray-800/30 rounded-xl h-48 animate-pulse"
                        />
                      ))
                  : trendingProblems.map((problem, idx) => (
                      <motion.div
                        key={problem.id}
                        variants={cardFade(idx)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className="problem-card"
                      >
                        <Card className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-[0_12px_40px_-10px_rgba(99,102,241,0.4)]">
                          <CardContent className="p-5">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h3 className="text-lg font-semibold mb-1">
                                  {problem.title}
                                </h3>
                                <Badge
                                  className={`${platformColors[problem.platform] || "bg-gray-600"} shadow-md`}
                                  variant="secondary"
                                >
                                  {problem.platform}
                                </Badge>
                              </div>
                              <Badge
                                className={`${difficultyColors[problem.difficulty] || "bg-gray-600"} shadow-md`}
                                variant="secondary"
                              >
                                {problem.difficulty}
                              </Badge>
                            </div>
                            <div className="flex items-center text-sm text-gray-400 mb-3">
                              <Code className="h-4 w-4 mr-2" />
                              <span>
                                {problem.solvedCount.toLocaleString()} solutions
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {problem.tags.map((tag, tagIdx) => (
                                <span
                                  key={tagIdx}
                                  className="px-2 py-1 bg-gray-700/50 rounded-md text-xs text-gray-300"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <Button
                              onClick={() =>
                                (window.location.href = problem.link)
                              }
                              variant="outline"
                              size="sm"
                              className="w-full border-[#0c6da1] hover:bg-[#0c6da1] text-white"
                            >
                              <Navigation className="h-4 w-4 mr-2" /> Solve
                              Problem
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
              </div>
            </TabsContent>
          </Tabs>

          <motion.div variants={fadeInUp} className="flex justify-center">
            <Button
              onClick={() => navigate("/problems-contests")}
              variant="outline"
              className="border-gray-700/50 hover:bg-gray-800/50 text-white group transition duration-300"
            >
              Explore More Problems
              <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <div className="rounded-2xl overflow-hidden p-1 bg-gradient-to-r from-[#89c9ec] via-[#05a8ff] to-[#0c6da1] bg-[length:200%_100%] animate-gradient-x">
          <div className="bg-[#03080c] rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#e5eff5]">
              Ready to level up your coding skills?
            </h2>
            <p className="text-[#e5eff5]/70 max-w-2xl mx-auto mb-8">
              Join thousands of competitive programmers and start your journey
              to coding excellence today.
            </p>
            <Button
              onClick={() => navigate("/problems-contests")}
              size="lg"
              className="bg-[#05a8ff] hover:bg-[#0c6da1] text-white px-8 font-medium text-base transition-colors"
            >
              Start Practicing
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-600 m-8 pt-8 text-center text-gray-400">
        <p>© {new Date().getFullYear()} BitWit. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Home;
