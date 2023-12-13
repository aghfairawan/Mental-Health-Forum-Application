import { useState } from 'react';

const UserProfileForm = () => {
  // Sample existing user data
  const initialUserData = {
    username: 'JohnDoe',
    address: '123 Main St',
    country: 'USA',
    bio: 'This is my bio. I love coding and exploring new technologies.',
  };

  const [formData, setFormData] = useState({
    username: initialUserData.username,
    address: initialUserData.address,
    country: initialUserData.country,
    bio: initialUserData.bio,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to send the updated user profile data to the backend
    console.log('Form submitted:', formData);
    // Add API call or other logic to update user profile on the server
  };

  return (
    <div className="flex">
      <div className="flex-3 bg-gray-100"></div> {/* Empty space on the left */}
      
      <div className="flex-1 max-w-sx bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-3xl font-bold mb-6 text-center">Edit Profile</h2>
        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <p className="mt-1 p-2 border rounded-md w-full bg-gray-100">{formData.username}</p>
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <p className="mt-1 p-2 border rounded-md w-full bg-gray-100">{formData.address}</p>
          </div>
          <div className="mb-4">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <p className="mt-1 p-2 border rounded-md w-full bg-gray-100">{formData.country}</p>
          </div>
          <div className="mb-4">
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfileForm;
