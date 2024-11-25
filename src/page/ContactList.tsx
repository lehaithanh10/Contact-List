import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./../styles/App.css";

interface User {
  id: number;
  username: string;
  name: string;
  email: string;
  phone: string;
}

const ContactList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="contact-list">
      <h1>Contacts</h1>
      {users.map((user) => (
        <Link to={`/contact/${user.id}`} key={user.id} className="contact-card">
          <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ContactList;