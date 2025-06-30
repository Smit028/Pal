'use client';
import React, { useEffect } from 'react';
import { League_Spartan, Poppins } from 'next/font/google';

// Fonts
const spartan = League_Spartan({
  subsets: ['latin'],
  weight: ['700'],
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400'],
});

export default function Sec1() {
  useEffect(() => {
    const loadScript = async () => {
      if (!window.jQuery) {
        const jQueryScript = document.createElement('script');
        jQueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
        document.body.appendChild(jQueryScript);

        jQueryScript.onload = () => {
          const fluidScript = document.createElement('script');
          fluidScript.src = '/fluid-background.js';
          document.body.appendChild(fluidScript);
        };
      } else {
        const fluidScript = document.createElement('script');
        fluidScript.src = '/fluid-background.js';
        document.body.appendChild(fluidScript);
      }
    };

    loadScript();
  }, []);

  return (
    <>
      <div id="jsi-fluid-container"></div>

      <div className={`font-sans ${spartan.className} ${poppins.className}`}>
        {/* ===== Header ===== */}
        <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-sm text-white px-6 md:px-20 h-16 flex justify-between items-center">
          <div className="text-xl font-extrabold tracking-widest">HE</div>
          <nav className="flex space-x-6 uppercase text-sm tracking-wide">
            <a href="#home" className="hover:text-yellow-400 transition">Home</a>
            <a href="#projects" className="hover:text-yellow-400 transition">Projects</a>
            <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
          </nav>
        </header>

        {/* ===== Hero Section ===== */}
        <section
          id="home"
          className="h-screen bg-black text-white relative px-6 md:px-20 flex flex-col justify-center items-center text-center"
        >
          <p className="text-sm tracking-widest">I AM</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-widest">HARUN</h1>
          <p className="mt-2 text-xs md:text-sm text-gray-400 tracking-widest">UI/UX DESIGNER</p>

          {/* Bottom-left Icons */}
          <div className="absolute bottom-6 left-6 flex flex-col items-center space-y-2 text-gray-400">
            <span>◎</span>
            <span>⛶</span>
            <span>✖</span>
          </div>

          {/* Bottom-right Scroll Text */}
          <div className="absolute bottom-6 right-6 -rotate-90 text-xs tracking-widest text-gray-400">
            SCROLL
          </div>
        </section>

        {/* ===== Projects Section ===== */}
        <section id="projects" className="h-screen bg-gray-900 text-white flex items-center justify-center">
          <h2 className="text-4xl font-bold">Projects Section</h2>
        </section>

        {/* ===== Contact Section ===== */}
        <section id="contact" className="h-screen bg-gray-800 text-white flex items-center justify-center">
          <h2 className="text-4xl font-bold">Contact Section</h2>
        </section>
      </div>
    </>
  );
}
