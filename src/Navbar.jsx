import React, { useState } from "react";

const Navbar = () => {
  const [date, setDate] = useState(new Date());

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const goToPreviousDay = () => {
    const prevDate = new Date(date);
    prevDate.setDate(date.getDate() - 1);
    setDate(prevDate);
  };

  const goToNextDay = () => {
    const nextDate = new Date(date);
    nextDate.setDate(date.getDate() + 1);
    setDate(nextDate);
  };

  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const dateNum = date.getDate();
  const year = date.getFullYear();

  return (
    <nav className="bg-stone-950 text-white p-4 shadow-md">
      <div className="flex justify-center items-center gap-4 text-xl font-semibold">
        <button onClick={goToPreviousDay} className="hover:text-gray-200">&larr;</button>
        <span>
          Today is {day}, </span>
          <span>
          {month}<> </> 
          
          {dateNum}, {year}
        </span>
        <button onClick={goToNextDay} className="hover:text-gray-200">&rarr;</button>
      </div>
    </nav>
  );
};

export default Navbar;
