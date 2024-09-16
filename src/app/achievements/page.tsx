import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';

const achievements = [
  {
    title: "1st runner up at UIU juniors programming",
    description: "Secured the first runner-up position in the UIU juniors programming competition.",
  },
  {
    title: "100% scholarship in 2 trimesters",
    description: "Awarded a 100% scholarship for academic excellence in two trimesters.",
  },
  {
    title: "50% scholarship in 4 trimesters",
    description: "Received a 50% scholarship for outstanding academic performance in four trimesters.",
  },
  {
    title: "260+ problems solved on Codeforces",
    description: (
      <div>
        <p className="mb-2">
          Demonstrated strong problem-solving skills by solving over 260 problems on Codeforces.
        </p>
        <a
          href="https://codeforces.com/profile/Nahin_Intesher"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-teal-400 underline hover:text-teal-600 transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faCode} className="w-5 h-5 mr-2" />
          View my Codeforces profile
        </a>
      </div>
    ),
  },
  {
    title: "40+ problems solved on LeetCode",
    description: (
      <div>
        <p className="mb-2">
          Improved algorithmic thinking by solving more than 40 problems on LeetCode.
        </p>
        <a
          href="https://leetcode.com/u/NahinIntesher"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-teal-400 underline hover:text-teal-600 transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faPuzzlePiece} className="w-5 h-5 mr-2" />
          Visit my LeetCode profile
        </a>
      </div>
    ),
  },
];

export default function Achievements() {
  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8 text-amber-300">Achievements</h1>
      <div className="space-y-6">
        {achievements.map((achievement, index) => (
          <div key={index} className="bg-gray-900 shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">{achievement.title}</h3>
            <div className="">{achievement.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
