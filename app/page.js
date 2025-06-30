import React from 'react'

export default function page() {
  return (
    <div className='bg-white'>


      <div className='grid grid-cols-8 gape-2'>
        <div className='col-span-2'>1</div>
        <div className='col-span-5 h-screen'>
<main className="h-full flex flex-col items-center justify-center sm:p-6 gap-10">
      {/* Black Container */}
      <div className="relative w-full max-w-6xl bg-[#1e1e1e] text-white rounded-3xl p-2 sm:p-10 min-h-[500px] overflow-visible">
        <h1 className="text-2xl sm:text-3xl font-bold">ARISEN SOUND</h1>
        <p className="text-gray-400 text-sm mt-2 max-w-md">
          A powerful sound experience with responsive UI design.
        </p>

        {/* Button in Cavity */}
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-orange-400 rounded-full flex items-center justify-center shadow-lg z-10">
          <span className="text-black text-lg sm:text-xl font-bold">➜</span>
        </div>

        {/* Orange Card (only floats on lg+) */}
        <div className="hidden lg:block absolute bottom-[-20px] left-[-20px] bg-orange-500 rounded-3xl p-6 w-[80%] max-w-[500px] shadow-lg z-10 text-black">
          <OrangeCardContent />
        </div>
      </div>

      {/* Stacked Orange Card on small screens */}
      <div className="block lg:hidden w-full max-w-6xl bg-orange-500 rounded-3xl p-6 shadow-lg text-black">
        <OrangeCardContent />
      </div>
    </main>
        </div>
        <div className='col-span-1'>1</div>

      </div>
    </div>
  )
}
function OrangeCardContent() {
  return (
    <>
      <h2 className="text-md font-semibold mb-3">Explore Categories</h2>
      <div className="flex flex-wrap gap-2 text-sm font-medium">
        <span className="px-4 py-1 bg-orange-300 rounded-full">🪑 Furniture</span>
        <span className="px-4 py-1 bg-orange-300 rounded-full">🎮 Gaming</span>
        <span className="px-4 py-1 bg-black text-white rounded-full">💄 Beauty</span>
        <span className="px-4 py-1 bg-orange-300 rounded-full">👶 Baby</span>
        <span className="px-4 py-1 bg-black text-white rounded-full">📦 Amazon Basic</span>
        <span className="px-4 py-1 bg-orange-300 rounded-full">💊 Pharmacy</span>
        <span className="px-4 py-1 bg-orange-300 rounded-full">🧸 Toys</span>
        <span className="px-4 py-1 bg-orange-300 rounded-full">📚 Books</span>
      </div>
      <div className="mt-4 flex justify-center gap-2">
        <span className="w-10 h-1 bg-black rounded-full"></span>
        <span className="w-3 h-1 bg-black opacity-50 rounded-full"></span>
        <span className="w-3 h-1 bg-black opacity-50 rounded-full"></span>
      </div>
    </>
  );
}