import React from "react";

const AfricanVillageLogo = () => {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className="w-32 h-32"
    >
      {/* Sun */}
      <circle cx="160" cy="40" r="30" fill="gold" />

      {/* Hut Body */}
      <ellipse cx="100" cy="120" rx="60" ry="40" fill="#8B4513" />

      {/* Hut Roof */}
      <polygon points="40,100 100,50 160,100" fill="#D2691E" />

      {/* Door */}
      <rect x="85" y="120" width="30" height="40" fill="black" />

      {/* Tree Trunk */}
      <rect x="20" y="110" width="10" height="40" fill="#654321" />

      {/* Tree Leaves */}
      <circle cx="25" cy="100" r="20" fill="green" />

      {/* Ground */}
      <rect y="160" width="200" height="40" fill="#C2B280" />
    </svg>
  );
};

export default AfricanVillageLogo;