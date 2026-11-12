import React from "react";
import CertificateCard from "./CertificateCard";
import CertificatePandas from "../../assets/PandasCert.png"
import CertificateIntroML from "../../assets/MachineLearningCert.png"
import CertificatePython from "../../assets/PythonCert.png"

const certificatePdf = (filename) => `${import.meta.env.BASE_URL}${filename}`;

const certificates = [
  {
    title: "Python-Pandas",
    issuer: "Kaggle",
    image: CertificatePandas,
  },
  {
    title: "Intro Machine Learning",
    issuer: "Kaggle",
    image: CertificateIntroML,
  },
  {
    title: "Python",
    issuer: "Kaggle",
    image: CertificatePython,
  },
  {
    title: "Programming Fundamentals",
    issuer: "PDF Certificate",
    documentUrl: certificatePdf("SIMPLI_1.pdf"),
  },
  {
    title: "Introduction to Express.js",
    issuer: "PDF Certificate",
    documentUrl: certificatePdf("SIMPLI_2.pdf"),
  },
  {
    title: "What Is Software Development?",
    issuer: "PDF Certificate",
    documentUrl: certificatePdf("SIMPLI_3.pdf"),
  },
  {
    title: "National Hackathon — Certificate of Participation",
    issuer: "Participant",
    documentUrl: certificatePdf("Certificate%20of%20Participation_Sinatra.pdf"),
  },
];

export default function Certificates() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold text-gray-800">Certificates</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <CertificateCard
            key={index}
            title={cert.title}
            issuer={cert.issuer}
            image={cert.image}
            documentUrl={cert.documentUrl}
          />
        ))}
      </div>
    </section>
  );
}
