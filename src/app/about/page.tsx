import Image from "next/image";
import ProfilePic1 from "@/public/images/ProfilePic1.jpg";
const skills = [
  {
    category: "Programming Languages",
    items: "Java, C, C++, Python, Dart, JavaScript",
  },
  {
    category: "Frameworks",
    items:
      "JavaFX, React JS, Node.js, Next JS, Flutter, React Native, Tailwind CSS",
  },
  { category: "Databases", items: "MySQL, MongoDB" },
  { category: "Web Technologies", items: "HTML, CSS, JS, JSON" },
  { category: "Version Control", items: "Git & GitHub" },
  { category: "Microcontrollers", items: "Arduino" },
  {
    category: "Graphics Technology",
    items: "Photoshop, Illustrator, PowerPoint, Premier Pro",
  },
];
export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 p-10">
      <h1 className="text-4xl font-bold mb-10 text-center text-amber-300">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row items-center md:items-start mb-10">
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-amber-300">
            Personal Info
          </h2>
          <p className="mb-6 leading-relaxed">
            Hello everyone I am 
            <span className="font-bold text-teal-200"> Nahin Intesher</span>
            . I am currently pursuing my BSCSE at United International University.
            With a strong academic background and a passion for technology, I am 
            constantly seeking new challenges and opportunities to grow in the 
            field of computer science and engineering.
          </p>
          <p className=" leading-relaxed">
            My interests include 
            <span className="font-bold text-teal-200 italic"> mobile app development</span>,
            <span className="font-bold text-teal-200 italic"> cyber security</span>,
            <span className="font-bold text-teal-200 italic"> machine learning</span> and
            <span className="font-bold text-teal-200 italic"> problem-solving</span>
            . I am highly motivated to teach others
            and conduct research in these areas.
          </p>
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-amber-300">
          Education
        </h3>
        <p className=" leading-relaxed">
          <strong>BSCSE</strong> - United International University
          <br />
          October 2022 - Present
          <br />
          CGPA: ***** / 4.00 (Till 5th Trimester)
        </p>
      </div>

      <h3 className="text-2xl font-semibold mb-4 text-amber-300">Skills</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-start">
            <span className="text-teal-300 mr-2">•</span>
            <div>
              <strong className="text-teal-300">{skill.category}:</strong>{" "}
              <span className="text-white">{skill.items}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
