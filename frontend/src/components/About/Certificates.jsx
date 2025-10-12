import React from "react";
import CertificateCard from "./CertificateCard";
import CertificatePandas from "../../assets/PandasCert.png"
import CertificateIntroML from "../../assets/MachineLearningCert.png"
import CertificatePython from "../../assets/PythonCert.png"
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
          />
        ))}
      </div>
    </section>
  );
}
