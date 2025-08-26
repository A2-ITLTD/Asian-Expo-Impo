import React from "react";
import { motion } from "framer-motion";

const Highlight = ({ children }) => (
  <span className="relative whitespace-nowrap">
    <span className="absolute inset-0 -skew-x-6 bg-gradient-to-r from-teal-500/30 via-teal-600/30 to-amber-500/30 blur-sm" />
    <span className="relative font-semibold text-white drop-shadow">
      {children}
    </span>
  </span>
);

export default function AboutUs() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-teal-950 to-teal-900 text-teal-100 py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Hero Section */}
        <section className="relative text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold md:text-6xl mb-6"
          >
            <Highlight>About Us</Highlight>
          </motion.h1>
          <p className="text-teal-200 mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
            Asian Import and Export Co., LTD is in the business of supplying
            high-quality food products, but it's what we do with our success
            that defines us. Treating our team members like family and
            supporting the communities we all call home is our priority.
          </p>
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Company Intro Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-teal-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-teal-700/30"
          >
            <h2 className="text-2xl font-bold text-amber-400 mb-6">
              Our Company
            </h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img
                  src="/assets/certificate.png"
                  alt="Asian Import and Export Co., LTD"
                  className="rounded-2xl shadow-lg w-full object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-teal-100 mb-4">
                  We offer a complete solution for distributing quality food
                  products. Our products reach markets across Asia, America,
                  Australia, Europe, South Africa, CIS countries, Middle East,
                  and Eastern Europe.
                </p>
                <p className="text-teal-100">
                  We are associated with renowned shipping lines ensuring timely
                  delivery using both dry and refrigerated containers. Quality
                  control, grading, packaging, and handling are strongly
                  maintained. Our commitment is to satisfy customers worldwide.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Global Reach Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-teal-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-teal-700/30"
          >
            <h2 className="text-2xl font-bold text-amber-400 mb-6">
              Global Reach
            </h2>
            <div className="space-y-2">
              {[
                "Asia",
                "America",
                "Australia",
                "Europe",
                "South Africa",
                "CIS Countries",
                "Middle East",
                "Eastern Europe",
              ].map((region) => (
                <div key={region} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-amber-400 mr-3"></div>
                  <span className="text-teal-100">{region}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-teal-800 to-teal-900 rounded-2xl p-8 shadow-lg border border-teal-700/30"
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-amber-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-amber-400">Mission</h2>
            </div>
            <p className="text-teal-100">
              Asian Import and Export Co., LTD is dedicated to the collection,
              handling, processing, marketing, and exportation of Raw Jute, Jute
              goods, Genuine Leathers, agro commodities, Handmade Terracotta
              Tiles, and plastic bottles scrap/flakes.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:col-span-2 bg-gradient-to-br from-teal-800 to-teal-900 rounded-2xl p-8 shadow-lg border border-teal-700/30"
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-amber-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-amber-400">Vision</h2>
            </div>
            <p className="text-teal-100">
              To be a leading and competitive company in the production,
              marketing, and exportation of agricultural commodities regionally,
              nationally, and internationally, while adhering to standards of
              quality, environment, safety, and occupational health regulations.
            </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-teal-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-teal-700/30"
        >
          <h2 className="text-2xl font-bold text-amber-400 mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Quality",
                desc: "Maintaining highest standards in all our products and services",
              },
              {
                title: "Integrity",
                desc: "Building trust through ethical business practices",
              },
              {
                title: "Innovation",
                desc: "Continuously improving our processes and offerings",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-teal-800/30 rounded-xl"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-amber-400/20 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-amber-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-teal-200 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
