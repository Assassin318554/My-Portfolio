import Image from "next/image";
import ProfilePic1 from "@/public/images/ProfilePic1.jpg";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 p-10">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row items-center md:items-start mb-10">
        <Image
          src={ProfilePic1}
          alt="Nahin Intesher"
          width={200}
          height={200}
          className="rounded-full mb-6 md:mb-0 md:mr-8 border-4 border-gray-900 shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Nahin Intesher
          </h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            I am a dedicated developer and problem solver, currently pursuing my
            BSCSE at United International University. With a strong academic
            background and a passion for technology, I am constantly seeking new
            challenges and opportunities to grow in the field of computer
            science and engineering.
          </p>
          <p className="text-gray-700 leading-relaxed">
            My interests include mobile app development, cyber security, machine
            learning, and problem-solving. I am highly motivated to teach others
            and conduct research in these areas.
          </p>
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Education</h3>
        <p className="text-gray-700 leading-relaxed">
          <strong>BSCSE</strong> - United International University
          <br />
          October 2022 - Present
          <br />
          CGPA: ***** / 4.00 (Till 5th Trimester)
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Skills</h3>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li>
            <strong>Programming Languages:</strong> Java, C, C++, Python, Dart,
            JavaScript
          </li>
          <li>
            <strong>Frameworks:</strong> JavaFX, React JS, Node.js, Next JS,
            Flutter, React Native, Tailwind CSS
          </li>
          <li>
            <strong>Databases:</strong> MySQL, MongoDB
          </li>
          <li>
            <strong>Web Technologies:</strong> HTML, CSS, JS, JSON
          </li>
          <li>
            <strong>Version Control:</strong> Git & GitHub
          </li>
          <li>
            <strong>Microcontrollers:</strong> Arduino
          </li>
          <li>
            <strong>Graphics Technology:</strong> Photoshop, Illustrator,
            PowerPoint, Premier Pro
          </li>
        </ul>
      </div>
    </div>
  );
}
