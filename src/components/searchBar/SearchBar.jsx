import './SearchBar.css'

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Szukaj użytkownika..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="border rounded p-2 w-full mb-2"
    />
  );
};

export default SearchBar;