'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const ResumePage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true once the component has mounted
    setIsClient(true);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-scree p-10">
      <div className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h1 className="text-3xl text-amber-300 font-bold mb-4">Download My Resume</h1>
        <p className="mb-4 text-gray-400 ">Click the button below to download my resume or view a preview.</p>
        
        {/* PDF Preview */}
        <div className="mb-4">
          {isClient && (
            <iframe
              src="/"
              width="100%"
              height="600px"
              className="border border-gray-800 rounded-lg"
              title="Resume Preview"
            >
              This browser does not support PDFs. Please download the PDF to view it: <a href="/files/resume.pdf">Download PDF</a>.
            </iframe>
          )}
        </div>
        
        {/* Download Button */}
        <a 
          href="/files/resume.pdf" 
          download="resume.pdf" 
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white"
        >
          Download Resume
        </a>
      </div>
    </main>
  );
};

export default ResumePage;
