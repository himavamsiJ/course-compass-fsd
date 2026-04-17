function SearchBar({ setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search for a course (e.g. Python)"
      className="search-bar"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;
