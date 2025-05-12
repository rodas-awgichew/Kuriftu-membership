import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <button
      onClick={() => navigate(-1)} // Go back to the previous page
      className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      ← Go Back
    </button>
  );
}

export default BackButton;