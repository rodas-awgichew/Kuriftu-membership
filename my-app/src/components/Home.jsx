import React from "react";
import { Link } from "react-router-dom";

function Home({ user, onLogout }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/50"
              alt="Kuriftu Logo"
              className="h-10 w-auto mr-2"
            />
            <div className="font-extrabold text-xl">KURIFTU</div>
          </div>
          <div>
          {user && (
  <>
    <Link
      to="/rewards"
      className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
    >
      Explore Rewards
    </Link>
    <Link
      to="/chatbot"
      className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
    >
      Chatbot
    </Link>
    <Link
      to="/referral"
      className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
    >
      Share
    </Link>
    <Link
      to="/account"
      className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4" // Changed from `px-3` to `px-4`
    >
      My Account
    </Link>
    <button
      onClick={onLogout}
      className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" // Removed `mr-5`, added `mr-4` like others
    >
      Logout
    </button>
  </>

            )}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-14 py-6 sm:px-0">
          <div className="rounded-lg h-auto bg-white p-14">
            <h2 className="text-2xl font-semibold mb-4">
              Welcome to Kuriftu African Village!
            </h2>

            {/* Video Section */}
            <div className="relative w-full h-98 bg-gray-200 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
              <video className="w-full h-full object-cover rounded-lg" controls>
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
           <div className=" text-xl mb-6 font-semibold justify-center flex items-center p-7">
           <p> Our Service</p>

           </div>
           
            <div className="flex flex-col md:flex-row items-center my-10">
              <div className="md:w-1/2 text-center md:text-left p-6">
                <h3 className="text-xl font-semibold mb-2">Luxurious Spa Experience</h3>
                <p>
                  Enjoy a rejuvenating spa treatment with traditional African
                  herbs and healing techniques to refresh your mind and body.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img
                  src="/img2.webp"
                  alt="Spa Experience"
                  className="rounded-lg shadow-md w-98 h-80"
                />
              </div>
            </div>

           
           
          
            <div className="flex flex-col md:flex-row-reverse items-center my-20">
              <div className="md:w-1/2 text-center md:text-left p-6">
                <h3 className="text-xl font-semibold mb-2">Fine Dining by the Lake</h3>
                <p>
                  Indulge in a world-class dining experience featuring authentic African
                  cuisine with breathtaking views of the lake.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img
                  src="/img4.webp"
                  alt="Dining Experience"
                  className="rounded-lg shadow-md w-98 h-80"
                />
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;