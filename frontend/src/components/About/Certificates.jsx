import React from "react";
import CertificateCard from "./CertificateCard";

const certificates = [
  {
    title: "Full Stack Web Development",
    issuer: "Coursera",
    image: "/assets/cert1.jpg",
  },
  {
    title: "UI/UX Design Fundamentals",
    issuer: "Udemy",
    image: "/assets/cert2.jpg",
  },
  {
    title: "Advanced JavaScript & ES6",
    issuer: "edX",
    image: "/assets/cert3.jpg",
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
