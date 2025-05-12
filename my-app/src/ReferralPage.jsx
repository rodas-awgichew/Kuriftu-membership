import React, { useState } from 'react';
import BackButton from './components/BackButton';
function ReferralPage() {
    // Example state for referral link (replace with dynamic link generation)
    const [referralLink, setReferralLink] = useState('https://example.com/referral/XYZ123');
    const [pointsEarned, setPointsEarned] = useState(0); //Example of a State, to be fetched from Backend

    // Placeholder function for copying to clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(referralLink);
        alert('Referral link copied to clipboard!'); // Replace with a better notification
    };

    // Placeholder function to simulate sharing (replace with actual sharing logic)
    const shareLink = () => {
      alert('Sharing functionality will be implemented using web share api!') // A placeholder;
    }

    return (
        <div className="bg-gray-100 min-h-screen py-20">
            <div className="absolute top-6 left-6">
          <BackButton />
        </div>
            <div className="container mx-auto max-w-md bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-semibold mb-4">Refer a Friend and Earn Points!</h1>
                <p className="text-gray-700 mb-4">
                    Share your referral link with your friends and earn points when they sign up.
                </p>

                {/* Referral Link Display */}
                <div className="mb-4">
                    <label htmlFor="referralLink" className="block text-gray-700 text-sm font-bold mb-2">
                        Your Referral Link:
                    </label>
                    <div className="flex items-center">
                        <input
                            type="text"
                            id="referralLink"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={referralLink}
                            readOnly
                        />
                        <button
                            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
                            type="button"
                            onClick={copyToClipboard}
                        >
                            Copy
                        </button>
                    </div>
                </div>

                {/* Share Buttons (Placeholder - Implement actual sharing) */}
                <div className="mb-6">
                    <p className="text-gray-700 text-sm font-bold mb-2">Share via:</p>
                    <div className="flex space-x-4">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={shareLink}
                        >
                            Share
                        </button>

                        {/* Add more share buttons (e.g., Facebook, Twitter) here, or use a sharing library */}
                    </div>
                </div>

                {/* Points Earned Display */}
                <div>
                    <p className="text-gray-700 text-sm font-bold mb-2">Points Earned:</p>
                    <p className="text-green-500 text-lg font-semibold">{pointsEarned}</p>
                </div>
            </div>
        </div>
    );
}

export default ReferralPage;
