import { SortButton, SearchBar, UserList } from "./components/imports";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setFilteredUsers(response.data);
      })
      .catch((error) => console.error("Błąd pobierania danych:", error));
  }, []);

  useEffect(() => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchQuery, users]);

  const handleSort = () => {
    const sortedUsers = [...filteredUsers].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setFilteredUsers(isSorted ? users : sortedUsers);
    setIsSorted(!isSorted);
  };

  return (
    <div className="users-wrapper">
      <h1 className="text-xl font-bold mb-4">Lista Użytkowników</h1>
      <div className="action-wrapper">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <SortButton handleSort={handleSort} />
      </div>
      <UserList users={filteredUsers} />
    </div>
  );
};

export default App;
