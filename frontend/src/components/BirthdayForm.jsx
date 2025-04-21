import { useState } from "react";
import axios from "../services/api";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faBirthdayCake } from "@fortawesome/free-solid-svg-icons";
import "./gradientAnimation.css";

const BirthdayForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    birthday: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/users", formData);
      toast.success(res.data.message || "User created successfully!");
      setFormData({ username: "", email: "", birthday: "" });
    } catch (err) {
      toast.error(err.response?.data?.message || "Error creating user");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-rainbow p-4">
      <form
        className="bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl hover:shadow-pink-400/50 transition-all duration-500 ease-in-out w-full max-w-md sm:max-w-lg transform hover:scale-105"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-blue-600">🎂 Add Birthday</h2>

        {/* Username Input */}
        <div className="flex items-center border rounded-lg p-3 mb-6 focus-within:ring-2 focus-within:ring-blue-400">
          <FontAwesomeIcon icon={faUser} className="text-blue-500 mr-4 text-lg sm:text-xl" />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            required
            className="w-full focus:outline-none text-base sm:text-lg"
          />
        </div>

        {/* Email Input */}
        <div className="flex items-center border rounded-lg p-3 mb-6 focus-within:ring-2 focus-within:ring-pink-400">
          <FontAwesomeIcon icon={faEnvelope} className="text-pink-500 mr-4 text-lg sm:text-xl" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full focus:outline-none text-base sm:text-lg"
          />
        </div>

        {/* Birthday Input */}
        <div className="flex items-center border rounded-lg p-3 mb-8 focus-within:ring-2 focus-within:ring-purple-400">
          <FontAwesomeIcon icon={faBirthdayCake} className="text-purple-500 mr-4 text-lg sm:text-xl" />
          <input
            type="date"
            name="birthday"
            value={formData.birthday}
            onChange={handleChange}
            required
            className="w-full focus:outline-none text-base sm:text-lg"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-blue-500 text-white py-3 rounded-lg font-bold text-base sm:text-lg transition-all duration-500"
        >
          Save Birthday
        </button>
      </form>
    </div>
  );
};

export default BirthdayForm;
