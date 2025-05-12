import React, { useState } from 'react';
import BackButton from './BackButton';
function Account() {
    const [fullName, setFullName] = useState('Emily');
    const [email, setEmail] = useState('emily@gmail.com');
    const [location, setLocation] = useState('');
    const [aboutMe, setAboutMe] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(''); //Pink, replace with real image link.

     const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        setSelectedImage(null);
        setImagePreview('https://via.placeholder.com/150/FF69B4/FFFFFF?text=Emily'); //Reset to placeholder.
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //Implement the logic to send the data to backend
        console.log({fullName, email, location, aboutMe, selectedImage}) //See that values are correct
        alert('Profile saved!')//Give confirmation to the user

    };

    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="absolute top-6 left-6">
          <BackButton />
        </div>
            <div className="bg-white rounded-lg shadow-md max-w-2xl w-full mx-auto p-8 flex">

                {/* Main Content (Right Side) */}
                <div className="w-3/4 pl-8">
                    <h2 className="text-2xl font-semibold mb-4">Edit profile</h2>

                    <form onSubmit={handleSubmit}>

                        {/* Profile Photo */}
                        <div className="mb-6">
                            <h3 className="text-lg font-medium mb-2">Profile photo</h3>
                            <div className="flex items-center">
                                <div className="w-24 h-24 rounded-full overflow-hidden mr-4">
                                    <img
                                        src={imagePreview}
                                        alt="Profile"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div>
                                <label htmlFor="imageUpload" className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded cursor-pointer">
                                        Choose image
                                    </label>
                                    <input type="file" id="imageUpload" className="hidden" accept="image/png, image/jpeg" onChange={handleImageChange} />
                                    {selectedImage && (
                                        <button type="button" className="text-gray-500 ml-2 hover:text-gray-700" onClick={handleRemoveImage}>
                                            Remove
                                        </button>
                                    )}

                                    <p className="text-gray-500 text-sm mt-1">Your photo should be in PNG or JPG format</p>
                                </div>
                            </div>
                        </div>

                        {/* Full Name */}
                        <div className="mb-4">
                            <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">
                                Full name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {/* Location */}
                        <div className="mb-4">
                            <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">
                                Location
                            </label>
                            <select
                                id="location"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            >
                                <option value="">-Select your country-</option>
                                {/* Add options for countries */}
                                <option value="UK">Ethiopia</option>
                                <option value="USA">USA</option>
                                <option value="Canada">Canada</option>
                                <option value="UK">UK</option>
                                
                                {/* ... */}
                            </select>
                        </div>

                        {/* About Me */}
                        <div className="mb-6">
                            <label htmlFor="aboutMe" className="block text-gray-700 text-sm font-bold

mb-2">
                                About me
                            </label>
                            <textarea
                                id="aboutMe"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
                                value={aboutMe}
                                onChange={(e) => setAboutMe(e.target.value)}
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-end">
                            <button type="button" className="bg-transparent hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded mr-2">
                                Cancel
                            </button>
                            <button type="submit" className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
                                Save profile
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Account;