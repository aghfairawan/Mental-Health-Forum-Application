import { useState } from "react";
import { searchApi } from "../../../api/forum-api";
import { Search } from "lucide-react";

export default function SearchNavbar() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]); 
  // console.log(searchResults)

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;
    try {
      const data = await searchApi(query, 1);
      setSearchResults(data);
    } catch (error) {
      console.error("Error during search:", error);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <label htmlFor="newest-movies-search" className="mb-2 text-sm font-medium sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <Search className="text-dark-navy" size={16} />
        </div>
        <input
          type="search"
          id="newest-movies-search"
          placeholder="Search forums"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="block w-80 p-1 ps-10 text-sm border border-blue-600 rounded-2xl bg-white focus:ring-1 focus:ring-blue-600 placeholder-gray-400 text-custom-gray"
        />
        <button type="submit" className="absolute top-0 end-0 px-3  text-sm font-medium h-full bg-dark-navy md:bg-light-navy rounded-e-2xl border border-none hover:opacity-80 focus:ring-2 focus:outline-none focus:ring-blue-300 ">
          <Search size={16} />
          <span className="sr-only">Search</span>
        </button>
      </div>
    </form>
  );
}
