import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);
    onSearch(val); // 🔥 Search while typing
  };

  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Search by location..."
        value={value}
        onChange={handleChange}
        className="flex-1 p-3 border rounded-l-lg text-black bg-white focus:outline-none"
      />
      <button
        onClick={() => onSearch(value)}
        className="bg-indigo-600 text-white px-6 rounded-r-lg hover:bg-indigo-700"
      >
        Search
      </button>
    </div>
  );
}
