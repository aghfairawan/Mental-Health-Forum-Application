export default function SearchNavbar() {
  return (
    <form action="">
      <label htmlFor="newest-movies-search" className="mb-2 text-sm font-medium sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input
          type="search"
          id="newest-movies-search"
          placeholder="Search forums"
          className="block w-80 p-1 ps-10 text-sm border border-blue-600 rounded-2xl bg-white focus:ring-1 focus:ring-blue-600 placeholder-gray-400 text-custom-gray"
        />
        <button type="submit" className="absolute top-0 end-0 px-3  text-sm font-medium h-full bg-dark-navy md:bg-light-navy rounded-e-2xl border border-none hover:opacity-80 focus:ring-2 focus:outline-none focus:ring-blue-300 ">
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>
    </form>
  );
}
