import React, { useState } from "react";

export default function CertificateCard({ title, issuer, image }) {
  const [showImage, setShowImage] = useState(false);

  return (
    <>
      <div
        className="bg-white shadow-lg rounded-lg p-6 cursor-pointer flex flex-col items-center justify-center text-center"
        onClick={() => setShowImage(true)}
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-500">{issuer}</p>
      </div>

      {/* Modal for certificate image */}
      {showImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setShowImage(false)}
        >
          <img
            src={image}
            alt={title}
            className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg"
          />
        </div>
      )}
    </>
  );
}
