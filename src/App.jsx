import { SortButton, SearchBar, UserList} from './components/imports'
import './App.css'
import axios from 'axios';
import { useEffect, useState } from 'react';


const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
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
    <div className="max-w-md mx-auto mt-10 p-4">
      <h1 className="text-xl font-bold mb-4">Lista Użytkowników</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SortButton handleSort={handleSort} />
      <UserList users={filteredUsers} />
    </div>
  );
};

export default App;