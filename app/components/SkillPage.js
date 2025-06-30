'use client';
import { motion } from 'framer-motion';

const skills = {
  languages: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
  frameworks: ['React', 'Next.js', 'Tailwind CSS'],
  tools: ['Firebase', 'Git', 'Vercel', 'Framer Motion'],
};

export default function SkillsPage() {
  return (
  <>
<div class="relative p-6 min-h-screen overflow-hidden bg-[#ECFAE5]">

  <div class="absolute top-10 left-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse -z-10"></div>
  <div class="absolute bottom-10 right-20 w-72 h-72 bg-lime-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse -z-10"></div>
  <div class="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse -z-10"></div>

  <div class="text-center mb-12 z-10 relative">
    <h2 class="text-4xl font-extrabold text-green-900">✨ Explore My Creative Projects ✨</h2>
    <p class="text-lg text-green-700 mt-2">Hover to discover and click to explore</p>
  </div>
<div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24 flex items-center">
      <div className="-m-1 flex flex-row sm:flex-wrap md:-m-2">
        <div className="flex w-full sm:w-1/2 flex-wrap lg:flex-row flex-row-reverse">
          <div className="w-full lg:w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
              src="https://www.tailwindtap.com/assets/components/gallery/image1.jpg"
            />
          </div>
          <div className="w-full lg:w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
              src="https://www.tailwindtap.com/assets/components/gallery/image2.jpg"
            />
          </div>
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center max-h-none lg:max-h-[1000px]"
              src="https://www.tailwindtap.com/assets/components/gallery/image7.jpg"
            />
          </div>
        </div>
        <div className="flex w-full sm:w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
              src="https://www.tailwindtap.com/assets/components/gallery/image9.jpg"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
              src="https://www.tailwindtap.com/assets/components/gallery/image4.jpg"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
              src="https://www.tailwindtap.com/assets/components/gallery/image6.jpg"
            />
          </div>
        </div>
      </div>
    </div>
</div>
  </>
  );
}
