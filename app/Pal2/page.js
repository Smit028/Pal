'use client';
import { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

export default function Home() {
  const [yesCount, setYesCount] = useState(0);
  const [message, setMessage] = useState('');
  const [isMobile, setIsMobile] = useState(true);
  const [noScale, setNoScale] = useState(1);
  const [hideButtons, setHideButtons] = useState(false); // ✅ new

  const containerRef = useRef(null);
  const yesBtnRef = useRef(null);
  const noBtnRef = useRef(null);

   const apologyMessages  = [
    "Please Sweetieee 😣",
    "Please Loveeeee",
    "Next time pakka 💔",
    "Don't do this 🥺",
    "Forgive me 🫣",
    "I promise! 🙏",
    "Please Jannnnn",
    "Please Sweetieee 😣",
    "Please Jananuu 💔",
    "Please Darlinggg 😣",
    "Please MY 6OTA DON? 😣",
    "I will wait till You Sayy Nooo, Pleaseee💗",
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const isOverlapping = (x, y, yesRect, noRect) => {
    return !(
      x + yesRect.width < noRect.left ||
      x > noRect.right ||
      y + yesRect.height < noRect.top ||
      y > noRect.bottom
    );
  };

  const moveYes = () => {
    const container = containerRef.current;
    const yesBtn = yesBtnRef.current;
    const noBtn = noBtnRef.current;

    if (!container || !yesBtn || !noBtn) return;

    const containerRect = container.getBoundingClientRect();
    const yesRect = yesBtn.getBoundingClientRect();
    const noRect = noBtn.getBoundingClientRect();

    const maxX = containerRect.width - yesRect.width;
    const maxY = containerRect.height - yesRect.height;

    let x = 0, y = 0;
    let attempts = 0;
    do {
      x = Math.random() * maxX;
      y = Math.random() * maxY;
      attempts++;
    } while (
      isOverlapping(
        x + containerRect.left,
        y + containerRect.top,
        yesRect,
        noRect
      ) && attempts < 100
    );

    yesBtn.style.position = 'absolute';
    yesBtn.style.left = `${x}px`;
    yesBtn.style.top = `${y}px`;
  };

  const handleYes = () => {
    setYesCount(prev => prev + 1);
    moveYes();
    setNoScale(prev => prev + 0.1);
  };

  const handleNo = () => {
    setMessage('Muaaahh sweetiee 😘');
    setHideButtons(true); // ✅ Hide both buttons
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
    });
  };

  if (!isMobile) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
        <h1 className="text-xl font-bold text-gray-700">This page is only for mobile 📱</h1>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-pink-100 overflow-hidden text-center px-4">
      <h1 className="text-2xl font-bold text-pink-600 mb-2">Are you still mad? 😢</h1>
      <p className="text-2xl text-gray-700 mb-8">
        {apologyMessages[Math.min(yesCount, apologyMessages.length - 1)]}
      </p>

      {!hideButtons && (
        <div
          ref={containerRef}
          className="relative w-full h-[300px] flex items-center justify-center"
        >
          <button
            ref={yesBtnRef}
            id="yes-btn"
            onClick={handleYes}
            className=" bg-red-500 text-white px-5 py-2 rounded-full ml-4 transition-transform duration-300"
          >Yes</button>

          <button
            ref={noBtnRef}
            onClick={handleNo}
            style={{ transform: `scale(${noScale})` }}
            className="bg-green-500 text-white px-5 py-2 rounded-full ml-4 transition-transform duration-300"
          >
            No
          </button>
        </div>
      )}

      {hideButtons && (
        <p className="mt-20 text-3xl text-red-600 font-bold animate-bounce">
          {message}
        </p>
      )}
    </main>
  );
}
