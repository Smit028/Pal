'use client';
import { useState } from 'react';

// Import dynamic React SVG components
import HeartPart1 from './HeartPart1';
import HeartPart2 from './HeartPart2';
import HeartPart3 from './HeartPart3';
import HeartPart4 from './HeartPart4';
import HeartPart6 from './HeartPart6';
import HeartPart7 from './HeartPart7';
import HeartPart8 from './HeartPart8';
import HeartPart9 from './HeartPart9';

export default function FoldableHeart({ centerImage, heartColor = '#e11d48' }) {
const [flapState, setFlapState] = useState({
  top: false,
  bottom: false,
  left: false,
  right: false,
});

  const toggleFlap = (side) => {
    setFlapState((prev) => ({
      ...prev,
      [side]: !prev[side],
    }));
  };

  const flapClass = 'w-full h-full';

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-[300px] h-[300px] transform scale-[1.25]">
        {/* Center */}
        <div
          className="absolute w-[100px] h-[100px] top-[100px] left-[100px] z-10 flex items-center justify-center"
          style={{ backgroundColor: heartColor }}
        >
          <img src={centerImage} alt="Center" className="w-full h-full object-cover" />
        </div>

        {/* Top */}
        <div
          onClick={() => toggleFlap('top')}
          className="absolute w-[100px] h-[100px] top-0 left-[100px] z-20"
          style={{
            transformOrigin: 'bottom',
            transform: flapState.top ? 'rotateX(0deg)' : 'rotateX(180deg)',
            transition: 'transform 0.6s ease',
          }}
        >
          <HeartPart2 className={flapClass} color={heartColor} />
        </div>

        {/* Bottom */}
        <div
          onClick={() => toggleFlap('bottom')}
          className="absolute w-[100px] h-[100px] top-[200px] left-[100px] z-20"
          style={{
            transformOrigin: 'top',
            transform: flapState.bottom ? 'rotateX(0deg)' : 'rotateX(-180deg)',
            transition: 'transform 0.6s ease',
          }}
        >
          <HeartPart8 className={flapClass} color={heartColor} />
        </div>

        {/* Left */}
        <div
          onClick={() => toggleFlap('left')}
          className="absolute w-[100px] h-[100px] top-[100px] left-0 z-20"
          style={{
            transformOrigin: 'right',
            transform: flapState.left ? 'rotateY(0deg)' : 'rotateY(180deg)',
            transition: 'transform 0.6s ease',
          }}
        >
          <HeartPart4 className={flapClass} color={heartColor} />
        </div>

        {/* Right */}
        <div
          onClick={() => toggleFlap('right')}
          className="absolute w-[100px] h-[100px] top-[100px] left-[200px] z-20"
          style={{
            transformOrigin: 'left',
            transform: flapState.right ? 'rotateY(0deg)' : 'rotateY(-180deg)',
            transition: 'transform 0.6s ease',
          }}
        >
          <HeartPart6 className={flapClass} color={heartColor} />
        </div>

        {/* Corners */}
        {[
          { id: 1, Comp: HeartPart1, top: 0, left: 0, sides: ['top', 'left'], origin: 'bottom right' },
          { id: 3, Comp: HeartPart3, top: 0, left: 200, sides: ['top', 'right'], origin: 'bottom left' },
          { id: 7, Comp: HeartPart7, top: 200, left: 0, sides: ['bottom', 'left'], origin: 'top right' },
          { id: 9, Comp: HeartPart9, top: 200, left: 200, sides: ['bottom', 'right'], origin: 'top left' },
        ].map(({ id, Comp, top, left, sides, origin }) => (
          <div
            key={id}
            onClick={() => {
              toggleFlap(sides[0]);
              toggleFlap(sides[1]);
            }}
            className="absolute w-[100px] h-[100px] z-30"
            style={{
              top,
              left,
              transformOrigin: origin,
              transform: `
                ${flapState[sides[0]] ? 'rotateX(0deg)' : sides[0] === 'top' ? 'rotateX(180deg)' : 'rotateX(-180deg)'}
                ${flapState[sides[1]] ? 'rotateY(0deg)' : sides[1] === 'left' ? 'rotateY(180deg)' : 'rotateY(-180deg)'}
              `,
              pointerEvents: !(flapState[sides[0]] || flapState[sides[1]]) ? 'auto' : 'none',
              transition: 'transform 0.6s ease',
            }}
          >
            <Comp className={flapClass} color={heartColor} />
          </div>
        ))}
      </div>
    </div>
  );
}
