import { IoMdSearch } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <label className="flex items-center gap-2 bg-white dark:bg-[#2b3945] dark:text-white p-4 pr-14 rounded-sm shadow-md text-[#858585] w-auto lg:w-[40%]">
      <IoMdSearch className="text-2xl" />
      <input
        className="outline-none "
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a country..."
      />
    </label>
  );
};

export default SearchBar;
