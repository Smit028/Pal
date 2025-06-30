"use client";
import React from "react";
import Image from "next/image"; // if you're using Next.js
import Img1 from "../img/img1.jpg";
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { useState } from 'react';
import { motion } from 'framer-motion';

const tabs = ['Projects', 'Contact'];

export default function PortfolioHome() {
    const [activeTab, setActiveTab] = useState('Home');
  return (
<>

    <div className="h-screen bg-[#ECFAE5] p-4 md:p-8 relative overflow-hidden flex flex-col">
      {/* Background blur elements for depth */}
      <div className="absolute top-20 left-10 w-60 h-60 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse" />
      <div className="absolute bottom-10 right-20 w-60 h-60 bg-lime-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse" />

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
        {/* Left Card */}
        <div className="h-full flex items-center justify-center">
          <div className="w-full rounded-xl bg-white/30 backdrop-blur-lg border border-white/40 shadow-xl p-6 text-gray-800 flex flex-col text-center space-y-4">
            {/* Photo */}
            <div className="w-full aspect-[4/4] overflow-hidden rounded-2xl border-4 border-white shadow-md relative">
              <Image
                src={Img1}
                alt="Your Photo"
                fill
                className="object-cover"
              />
            </div>

            {/* Full-width Black Button */}
            <button className="w-full bg-black text-white py-2 text-xs rounded-md hover:bg-gray-800 transition">
              Connect with me
            </button>

            {/* Details */}
            <div>
              <h2 className="text-xl font-semibold">Smit Tankariya</h2>
              <p className="text-sm text-gray-700">Aspiring Web Developer</p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4">
   <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-sm hover:bg-gray-800 transition"
      >
        <FaLinkedin className="w-4 h-4" />
      </a>
      <a
        href="https://instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-sm hover:bg-gray-800 transition"
      >
        <FaInstagram className="w-4 h-4" />
      </a>
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-sm hover:bg-gray-800 transition"
      >
        <FaGithub className="w-4 h-4" />
      </a>
            </div>
          </div>
        </div>

        {/* Right Side (Name) */}
        <div className="md:col-span-1 flex items-center justify-end text-gray-800 text-4xl md:text-6xl font-bold pr-4 md:pr-12 text-right">
          <div>
            <h1 className="leading-tight">
              Smit
              <br />
              Tankariya
            </h1>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
