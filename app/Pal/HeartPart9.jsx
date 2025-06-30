export default function HeartPart9({ color = "red", className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="100px"
      height="100px"
      className={className}
    >
      <g transform="translate(-200, -200)">
        <path
          d="M150 270 C20 180, 0 80, 75 50 C100 40, 125 60, 150 90 C175 60, 200 40, 225 50 C300 80, 280 180, 150 270 Z"
          fill={color}
        />
      </g>
    </svg>
  );
}
    