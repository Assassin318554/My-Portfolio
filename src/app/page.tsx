"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ProfilePic1 from "@/public/images/ProfilePic1.jpg";
import { Pacifico } from "next/font/google";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.6 },
};

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-300 to-white p-10">
      <motion.div
        className="text-center"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={fadeInUp}
      >
        <motion.div
          className="flex justify-center mb-10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src={ProfilePic1}
            alt="Nahin Intesher"
            width={200}
            height={200}
            className="rounded-full border-4 border-gray-900 shadow-lg"
          />
        </motion.div>
        <motion.h1
          className="text-5xl font-extrabold mb-4 text-gray-900"
          variants={fadeInUp}
        >
          Nahin Intesher
        </motion.h1>
        <motion.h2
          className="text-2xl text-gray-600 mb-6"
          variants={fadeInUp}
        >
          Problem Solver & Dedicated Developer
        </motion.h2>
        <motion.p
          className="text-center max-w-3xl mx-auto mb-10 text-gray-700 leading-relaxed"
          variants={fadeInUp}
        >
          I am passionate about building innovative solutions and solving
          complex problems through technology. Currently pursuing a BSCSE at
          United International University. With a focus on Mobile App Development, Cyber Security, and
          Machine Learning, I'm always striving to push boundaries.
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-10"
          variants={fadeInUp}
        >
          <Link
            href="/about"
            className="bg-gray-700 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            About Me
          </Link>
          <Link
            href="/projects"
            className="bg-gray-700 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            My Projects
          </Link>
          <Link
            href="/contact"
            className="bg-gray-700 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Contact
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <p className="text-lg font-semibold text-gray-700 mb-6">
          Featured Skills
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {["Java", "React", "Node.js", "Flutter", "Python", "MySQL"].map(
            (skill, index) => (
              <motion.span
                key={skill}
                className="bg-gray-500 text-white px-5 py-3 rounded-md text-sm font-medium shadow-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                {skill}
              </motion.span>
            )
          )}
        </div>
      </motion.div>
    </div>
  );
}
