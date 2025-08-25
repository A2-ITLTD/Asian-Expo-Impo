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
    <div className="min-h-screen w-full bg-teal-950 text-teal-100 py-16">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        {/* Hero Section */}
        <section className="relative text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold md:text-6xl mb-4"
          >
            <Highlight>About Us</Highlight>
          </motion.h1>
          <p className="text-teal-200 mt-2 max-w-3xl mx-auto">
            Asian Import and Export Co., LTD is in the business of supplying
            high-quality food products, but it’s what we do with our success
            that defines us. Treating our team members like family and
            supporting the communities we all call home is our priority.
          </p>
        </section>

        {/* Image + Intro Section */}
        <section className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/2">
            <img
              src="/assets/certificate.png"
              alt="Asian Import and Export Co., LTD"
              className="rounded-3xl shadow-lg w-full object-cover"
            />
          </div>
          <div className="lg:w-1/2 space-y-4">
            <p className="text-teal-200">
              We offer a complete solution for distributing quality food
              products. Our products reach markets across Asia, America,
              Australia, Europe, South Africa, CIS countries, Middle East, and
              Eastern Europe. We are associated with renowned shipping lines
              ensuring timely delivery using both dry and refrigerated
              containers. Quality control, grading, packaging, and handling are
              strongly maintained. Our commitment is to satisfy customers
              worldwide.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-teal-900 rounded-3xl p-8 shadow-md space-y-4">
          <h2 className="text-3xl font-bold text-amber-400">Mission</h2>
          <p className="text-teal-100">
            Asian Import and Export Co., LTD is dedicated to the collection,
            handling, processing, marketing, and exportation of Raw Jute, Jute
            goods, Genuine Leathers, agro commodities, Handmade Terracotta
            Tiles, and plastic bottles scrap/flakes.
          </p>
        </section>

        {/* Vision Section */}
        <section className="bg-teal-900 rounded-3xl p-8 shadow-md space-y-4">
          <h2 className="text-3xl font-bold text-amber-400">Vision</h2>
          <p className="text-teal-100">
            To be a leading and competitive company in the production,
            marketing, and exportation of agricultural commodities regionally,
            nationally, and internationally, while adhering to standards of
            quality, environment, safety, and occupational health regulations.
          </p>
        </section>
      </div>
    </div>
  );
}
