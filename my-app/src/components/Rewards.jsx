import React, { useState } from "react";
import BackButton from "./BackButton";

function Rewards() {
  const [selectedReward, setSelectedReward] = useState(null);
  const rewards = [
    "Spa Treatment",
    "Dinner Discount",
    "Free Night Stay",
    "Boat Tour",
    "Massage Therapy",
    "Outdoor Adventure",
    "Traditional Ethiopian Coffee Ceremony",
    "Private Beach Access",
  ];

  // Function to randomly select a reward
  const spinWheel = () => {
    const randomIndex = Math.floor(Math.random() * rewards.length);
    setSelectedReward(rewards[randomIndex]);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 bg-white p-8 rounded-lg shadow-md">
        
        {/* Back Button - Top Left Corner */}
        <div className="absolute top-6 left-6">
          <BackButton />
        </div>

        {/* Rewards Section */}
        <h2 className="text-2xl font-semibold mb-4 text-center">Spin & Win Exclusive Rewards!</h2>
        <p className="text-center mb-6">Try your luck and win an unforgettable experience at Kuriftu Resort!</p>

        {/* Circular Spin Wheel */}
        <div className="flex flex-col items-center">
          <div className="relative w-48 h-48 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
            <button 
              onClick={spinWheel} 
              className="absolute w-16 h-16 bg-yellow-400 rounded-full text-black font-bold text-lg flex items-center justify-center"
            >
              SPIN
            </button>
          </div>
        </div>

        {/* Display Reward Result */}
        {selectedReward && (
          <div className="mt-6 text-center bg-gray-200 p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold">Congratulations! 🎉</h3>
            <p>You won: <span className="font-bold text-green-600">{selectedReward}</span></p>
          </div>
        )}

      </div>
    </div>
  );
}

export default Rewards;