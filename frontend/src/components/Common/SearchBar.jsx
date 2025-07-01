

import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

const SearchBar = ({ isOpen, setIsOpen }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleCancel = () => {
    setSearchTerm("");
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search Term:", searchTerm);
    setSearchTerm("");
    setIsOpen(false);
  };

  return (
    <div
      className={`transition-all duration-300 ${
        isOpen
          ? "absolute top-0 left-0 w-full h-24 bg-white z-50 flex items-center justify-center"
          : "w-auto"
      }`}
    >
      {isOpen ? (
        <form
          className="flex items-center space-x-4 w-full justify-center"
          onSubmit={handleSubmit}
        >
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-100 px-4 py-2 pr-10 rounded-lg focus:outline-none w-full placeholder:text-gray-700"
            />
            <HiMagnifyingGlass className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
          </div>
          <button
            type="button"
            onClick={handleCancel}
            className="text-gray-600 hover:text-black"
          >
            <IoClose className="h-6 w-6" />
          </button>
        </form>
      ) : (
        <button onClick={() => setIsOpen(true)} className="ml-4">
          <HiMagnifyingGlass className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;

