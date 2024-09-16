"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import resume from "@/public/images/resume.png";
import anotherImage from "@/public/images/resumeBack.png"; // Import the new image

const ResumePage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true once the component has mounted
    setIsClient(true);
  }, []);

  // Function to trigger image download
  const handleDownload = (imageSrc: string, filename: string) => {
    const link = document.createElement("a");
    link.href = imageSrc; // Use the `src` of the imported Image
    link.download = filename; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10">
      <div className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h1 className="text-3xl text-amber-300 font-bold mb-4">
          Download My Resume
        </h1>
        <p className="mb-4 text-gray-400">
          Click the button below to download my resume or view a preview.
        </p>

        {/* Scrollable Container */}
        <div className="h-96 overflow-y-auto mb-4">
          <div className="text-center flex flex-col items-center">
            {isClient && (
              <>
                <Image
                  src={resume}
                  width={700}
                  height={500}
                  alt="Resume Preview"
                  className="border border-gray-800 rounded-lg mb-4"
                />
                <Image
                  src={anotherImage}
                  width={700}
                  height={500}
                  alt="Another Preview"
                  className="border border-gray-800 rounded-lg"
                />
              </>
            )}
          </div>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col items-center space-y-4">
          <button
            onClick={() => handleDownload(resume.src, "resume.png")}
            className="bg-amber-500 hover:bg-amber-600 text-gray-900 px-4 py-2 rounded-lg shadow-md"
          >
            Download Front Page Image
          </button>
          <button
            onClick={() =>
              handleDownload(anotherImage.src, "another-image.png")
            }
            className="bg-amber-500 hover:bg-amber-600 text-gray-900 px-4 py-2 rounded-lg shadow-md"
          >
            Download Back Page Image
          </button>
        </div>
      </div>
    </main>
  );
};

export default ResumePage;
