import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";

export default function CertificateCard({ title, issuer, image, documentUrl }) {
  const cardClassName =
    "bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center text-center hover:shadow-2xl transition-all duration-300 w-full sm:w-[80%] md:w-[60%] lg:w-[300px] mx-auto";

  const content = (
    <>
      {image ? (
        <div className="relative group w-full">
          <img
            src={image}
            alt={title}
            className="rounded-lg w-full h-48 object-cover mb-4 transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="mb-4 flex h-48 w-full flex-col items-center justify-center rounded-lg bg-blue-50 text-blue-700">
          <FileText className="h-14 w-14" aria-hidden="true" />
          <span className="mt-3 text-sm font-medium">Open PDF certificate</span>
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-gray-500 text-sm">{issuer}</p>
      {documentUrl && (
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
          View certificate <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </span>
      )}
    </>
  );

  const motionProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
    whileHover: { scale: 1.05 },
    className: cardClassName,
  };

  if (documentUrl) {
    return (
      <motion.a
        {...motionProps}
        href={documentUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${title} PDF certificate`}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div {...motionProps}>
      {content}
    </motion.div>
  );
}
