"use client";
import Image from "next/image";
import profile from "@/public/images/ProfilePic1.jpg";
import TypewriterHeading from "@/components/TypewriterHeading";
import { FaBrain, FaMobileAlt, FaLaptopCode, FaRobot } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white px-4">
      <div className="text-center max-w-4xl w-full p-4">
        <div className="mb-8 relative">
          <div className="w-48 h-48 rounded-full overflow-hidden mx-auto border-4 border-blue-400 shadow-lg mt-5">
            <Image
              src={profile} // Replace with your actual image path
              alt="Afran Hossan Reaz"
              width={400} // Adjusted for responsive design
              height={400} // Adjusted for responsive design
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 px-4 py-1 rounded-full">
            <p className="text-sm font-semibold">
              Hello everyone <span className="wave">👋</span>
            </p>
            <style jsx>{`
              .wave {
                display: inline-block;
                animation: wave-animation 2s infinite;
                transform-origin: 70% 70%;
              }
              @keyframes wave-animation {
                0% { transform: rotate(0deg); }
                10% { transform: rotate(14deg); }
                20% { transform: rotate(-8deg); }
                30% { transform: rotate(14deg); }
                40% { transform: rotate(-4deg); }
                50% { transform: rotate(10deg); }
                60% { transform: rotate(0deg); }
                100% { transform: rotate(0deg); }
              }
            `}</style>
          </div>
        </div>

        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400">
          I'm Nahin Intesher
        </h1>

        <TypewriterHeading />

        <div className="flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-4 mt-4">
          <Link href="/projects"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 mb-2 sm:mb-0"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="bg-transparent hover:bg-blue-700 text-blue-100 hover:text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded-full transition duration-300"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <div className="mt-16 mb-5 text-center">
        <p className="text-lg text-gray-300 mb-4">Specializing in</p>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { label: "Machine Learning", icon: <FaRobot /> },
            { label: "AI", icon: <FaBrain /> },
            { label: "Mobile App Development", icon: <FaMobileAlt /> },
            { label: "Web Development", icon: <FaLaptopCode /> },
          ].map(({ label, icon }) => (
            <span
              key={label}
              className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center"
            >
              {icon}
              <span className="ml-2">{label}</span>
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
