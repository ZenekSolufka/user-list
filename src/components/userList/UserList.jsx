import './UserList.css'
import { UserItem } from '../imports';


const UserList = ({ users }) => (
  <ul className="border rounded p-4 shadow-md">
    {users.map((user) => (
      <UserItem key={user.id} user={user} />
    ))}
  </ul>
);

export default UserList;