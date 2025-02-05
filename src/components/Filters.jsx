import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const Filters = ({selectedRegion, setSelectedRegion}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  const handleRegion = (region) => {
    setSelectedRegion(region);
    setIsOpen(false);
  }

  return (
    <div className="relative">
      <button 
        className="relative shadow-md p-4 bg-white dark:bg-[#2b3945] dark:text-white rounded-sm"
        onClick={toggleDropdown}
      >
        {selectedRegion || "Filter by Region"} <IoIosArrowDown className='inline ml-8' />
      </button>
      {isOpen && (
        <div className="absolute w-full mt-1 flex flex-col gap-1 bg-white dark:bg-[#2b3945] dark:text-white p-4 rounded-sm shadow-md items-start">
          <button className='cursor-pointer' onClick={() => handleRegion("Africa")}>Africa</button>
          <button className='cursor-pointer' onClick={() => handleRegion("Americas")}>America</button>
          <button className='cursor-pointer' onClick={() => handleRegion("Asia")}>Asia</button>
          <button className='cursor-pointer' onClick={() => handleRegion("Europe")}>Europe</button>
          <button className='cursor-pointer' onClick={() => handleRegion("Oceania")}>Oceania</button>
        </div>
      )}
    </div>
  );
};

export default Filters;