import React from "react";
import { useNavigate } from "react-router-dom";

function Cards({ item }) {
  const navigate = useNavigate();

  const handleAddNowClick = () => {
   
    if (item.name === "Deluxe Package") {
      
      navigate("/Holidaypage");
    } else if (item.name === "PremiumPackage") {
      
      navigate("/Holidaypage1");
    }else if (item.name === "Grand Package") {
     
      navigate("/Holidaypage2");
    }else{
      navigate("/Holidaypage3");
    }
  };

  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img src={item.image} alt="gift package" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-center">
            <button
              onClick={handleAddNowClick}
              className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200"
            >
              Add Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
