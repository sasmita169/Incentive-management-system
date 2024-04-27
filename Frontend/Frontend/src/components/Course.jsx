import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
function Course() {
  const [book, setBook] = useState([]);
  const [salesInput, setSalesInput] = useState("");
  const [totalSales, setTotalSales] = useState(0);
  const [incentiveAmount, setIncentiveAmount] = useState(0);
  const [holidayPackageEligible, setHolidayPackageEligible] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4002/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  const calculateIncentive = () => {
    const sales = parseInt(salesInput);
    
    let incentive = 0;
    let holidayPackage = false;
    let selectedPackage = "";

    if (sales >= 10000) {
      incentive = sales * 0.015;
    }
    if (sales >= 20000) {
      incentive = sales * 0.03;
    }
    if (sales >= 30000) {
      incentive = sales * 0.035 + 1000;
    }
    if (sales >= 50000) {
      incentive = sales * 0.05;
      holidayPackage = true;
      selectedPackage = "Deluxe Package"; // Example: Assigning a package based on sales
    }
    if (sales >= 70000) {
      incentive = sales * 0.5;
      holidayPackage = true;
      selectedPackage = "Premium Package"; // Example: Assigning a package based on sales
    }
    if (sales >= 80000) {
      incentive = sales * 0.5;
      holidayPackage = true;
      selectedPackage = "Grand Package"; // Example: Assigning a package based on sales
    }
    if (sales >= 100000) {
      incentive = sales * 0.5;
      holidayPackage = true;
      selectedPackage = "Platinum Adventures Package"; // Example: Assigning a package based on sales
    }

    setTotalSales(sales);
    setIncentiveAmount(incentive);
    setHolidayPackageEligible(holidayPackage);
    setSelectedPackage(selectedPackage);
  };

  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl mt-10">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-10">
            (i). Achieving 10,000 sales results in a 1.5% incentive.
            <br />
            (ii). Achieving 20,000 sales results in a 3% incentive.
            <br />
            (iii). Achieving 30,000 sales results in a 3.5% incentive plus a $1000 bonus.
            <br />
            (iv). Achieving more than 50,000 sales results in a 5% incentive plus eligibility for a holiday package.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
          <div className="mt-20">
          <label htmlFor="salesInput">Enter Sales Results :</label>
          <input
            type="number"
            id="salesInput"
            value={salesInput}
            onChange={(e) => setSalesInput(e.target.value)}
            placeholder="Enter sales results..."
            className="px-4 py-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={calculateIncentive}
            className="ml-2 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300"
          >
            Calculate
          </button>
        </div>
        <div className="mt-6">
          <p>Total Sales: {totalSales}</p>
          <p>Incentive Amount: {incentiveAmount}</p>
          {holidayPackageEligible && (
            <p className="text-pink-900">
              <b>Eligible for holiday package</b> - Selected Package: {selectedPackage}
            </p>
          )}
        </div>
        </div>

        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
