import { useState } from "react";
import { PenLine } from "lucide-react";
import ThisPage from "../setting-profile/thisPage";

const UserProfileForm = () => {
  const initialUserData = {
    username: "JohnDoe",
    address: "123 Main St",
    country: "USAA",
    bio: "This is my bio. I love coding and exploring new technologies.",
  };

  const [formData, setFormData] = useState({
    username: initialUserData.username,
    address: initialUserData.address,
    country: initialUserData.country,
    bio: initialUserData.bio,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  const handleProfileChange = () => {
    setIsEditing(!isEditing);
  };
  // TODO: move logic API into api module/folder
  // TODO: change fetch api to axios
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected avatar file:", file);

    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      // Make a POST request to the BE with image data
      fetch("https://final-project-image-wo3wakb2jq-wl.a.run.app/api/profile", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          setUploadedImageUrl(data.imageUrl);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsEditing(false);
  };

  const handleSubmitAvatar = (e) => {
    e.preventDefault();
    console.log("Avatar form submitted");
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row h-full">
        <div className="w-full md:w-3/4 flex flex-col overflow-auto max-h-screen">
          <div className="mb-8">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/4 bg-gray-100">
                <h2 className="text-2xl font-bold mb-6 md:mb-0 ml-10">
                  Profile
                </h2>
              </div>

              <div className="w-full md:w-3/4 bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
                <form onSubmit={handleSubmit} className="p-6">
                  <div className="mb-4 md:ml-10 flex items-center">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700 w-16"
                    >
                      Username
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="mt-1 md:ml-4 p-2 w-full rounded-md"
                      />
                    ) : (
                      <p className="mt-1 md:ml-4 p-2">{formData.username}</p>
                    )}
                  </div>
                  <div className="mb-4 md:ml-10 flex items-center">
                    <label
                      htmlFor="bio"
                      className="block text-sm font-medium text-gray-700 w-16"
                    >
                      Address
                    </label>
                    {isEditing ? (
                      <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="mt-1 md:ml-4 p-2 border rounded-md w-full"
                      ></textarea>
                    ) : (
                      <p className="mt-1 md:ml-4 p-2">{formData.address}</p>
                    )}
                  </div>
                  <div className="mb-4 md:ml-10 flex items-center">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700 w-16"
                    >
                      Country
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="mt-1 md:ml-4 p-2 w-full rounded-md"
                      />
                    ) : (
                      <p className="mt-1 md:ml-4 p-2">{formData.country}</p>
                    )}
                  </div>
                  <div className="mb-4 md:ml-10 flex items-center">
                    <label
                      htmlFor="bio"
                      className="block text-sm font-medium text-gray-700 w-16"
                    >
                      Bio
                    </label>
                    {isEditing ? (
                      <textarea
                        id="bio"
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        className="mt-1 md:ml-4 p-2 border rounded-md w-full"
                      ></textarea>
                    ) : (
                      <p className="mt-1 md:ml-4 p-2">{formData.bio}</p>
                    )}
                  </div>
                  <div className="mb-4 md:ml-10 md:flex md:items-center">
                    <button
                      type="button"
                      className="ml-auto md:mr-4 mt-4 md:mt-0 px-4 py-2 bg-blue-500 text-white rounded-md flex items-center hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                      onClick={handleProfileChange}
                    >
                      <PenLine className="mr-5" />
                      {isEditing ? "Save" : "Change"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* second form */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/4 bg-gray-100">
                <h2 className="text-2xl font-bold mb-6 md:mb-0 ml-10">
                  Avatar
                </h2>
              </div>

              <div className="w-full md:w-3/4 bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
                <form onSubmit={handleSubmitAvatar} className="p-6">
                  <div className="mb-4 md:ml-40 flex-col items-center ">
                    <label
                      htmlFor="avatar"
                      className="block text-sm font-medium text-gray-700 w-16"
                    >
                      Change your avatar:
                    </label>
                    {uploadedImageUrl ? (
                      <img
                        src={uploadedImageUrl}
                        alt="Avatar"
                        className="rounded-full overflow-hidden w-40 h-40 mb-4"
                      />
                    ) : (
                      <div className="rounded-full overflow-hidden w-40 h-40 mb-4">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                          alt="Avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <input
                      type="file"
                      id="avatar"
                      name="avatar"
                      onChange={handleAvatarChange}
                      accept="image/*"
                      className="rounded-full overflow-hidden w-40 h-40 mb-4"
                    />
                    <button
                      type="submit"
                      className="px-8 py-2 bg-blue-500 text-white rounded-md flex items-center hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                    >
                      <PenLine className="mr-5" />
                      Change
                    </button>
                    <p className="text-gray-600 mt-2">
                      Please ensure your avatar adheres to the community rules.{" "}
                      <br />
                      This means it must be suitable for all ages. i.e. no
                      nudity, profanity or suggestive content.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full md:w-1/6 ml-20 mt-5">
          <ThisPage />
        </div>
      </div>
    </div>
  );
};

export default UserProfileForm;
