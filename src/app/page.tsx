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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-gray-950 to-blue-900 text-white p-10">
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
            className="rounded-full border-4 border-amber-900 shadow-lg"
          />
        </motion.div>
        <motion.h1
          className="text-5xl font-extrabold mb-4 "
          variants={fadeInUp}
        >
          Nahin Intesher
        </motion.h1>
        <motion.h2 className="text-2xl text-amber-300 mb-6" variants={fadeInUp}>
          Problem Solver & Dedicated Developer
        </motion.h2>
        <motion.p
          className="text-center max-w-3xl mx-auto mb-10 leading-relaxed"
          variants={fadeInUp}
        >
          I am passionate about building innovative solutions and solving
          complex problems through technology. Currently pursuing a BSCSE at
          United International University. With a focus on Mobile App
          Development, Cyber Security, and Machine Learning, I'm always striving
          to push boundaries.
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
    </div>
  );
}
