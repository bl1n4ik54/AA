function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <input
      className='search'
      type="search"
      value={searchTerm}
      onChange={onSearchChange}
      placeholder="Поиск"
    />
  );
}

export default SearchBar;