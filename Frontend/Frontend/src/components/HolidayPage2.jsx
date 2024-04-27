import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function EmployeeForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to your backend endpoint
      await axios.post("http://localhost:4002/user/login", { email, password });
      // Show success toast notification
      toast.success("You have successfully book Incentive Package !");
      // Optionally, navigate to a new page or perform other actions after successful login
    } catch (error) {
      // Handle errors
      console.error("Error logging in:", error);
      toast.error("Failed to book incentivepackage");
    }
  };
  return (
    <main className="bg-gray-100 dark:bg-neutral-900 sm:p-8 min-h-screen flex items-center justify-center">
      <section className="">
        <div className="bg-gray-100 dark:bg-black-100 py-8 lg:py-16 px-4 mx-auto max-w-3xl rounded-md shadow-lg dark:shadow-sm dark:shadow-white">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-black">
            Your Gift package
          </h2>
          <h3 style={{ textAlign: "center", color: "#ff1493" }}>You are in GrandPackage</h3>

          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-black-400 sm:text-sm">
            <span className="text-pink-700 sm:text-xl">Congratulation !</span>{" "}
            You have been awarded an incentive bonus for your outstanding
            performance and dedication to our team. Your hard work and
            commitment have not gone unnoticed, and we deeply appreciate the
            value you bring to our organization.
          </p>
          <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-2">
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-black dark:text-black-300">
                Email Id
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="xxxxxxxxxxx@gmail.com"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1 text-sm font-medium text-black dark:text-black-300">
                Employee Id
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="XXXXXXXX"
                required
              />
            </div>
            <div>
              <p className="text-sm text-black">
                <strong>Holiday Name:</strong> Rainforest Getaways
              </p>
              <p className="text-sm text-black">
                <strong>Duration (Nights):</strong> 6 nights
              </p>
              <p className="text-sm text-black">
                <strong>Destination:</strong> Paris
              </p>
              <p className="text-sm text-black">
                <strong>Location:</strong> Luxury Beach Resort
              </p>
              <p className="text-sm text-black">
                <strong>Amenities:</strong>
              </p>
              <ul className="text-sm text-black">
                <li>i-Water sports activities</li>
                <li>ii-Sunset yacht cruise</li>
                <li>iii-Guided nature hikes</li>
                <li>iv-Gourmet dining options</li>

              </ul>
            </div>
            <div className="sm:col-span-2 flex justify-center">
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center bg-pink-700 text-white rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
              >
                Book
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default EmployeeForm;
