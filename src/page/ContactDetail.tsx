import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./../styles/App.css";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}

const ContactDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        console.log(response.data);
        setUser(response.data)
        })
      .catch((error) => console.error("Error fetching user:", error));
  }, [id]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="contact-detail">
      <h1>{user.name}</h1>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
      <p><strong>Address:</strong> {`${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
      <p><strong>Catchphrase:</strong> "{user.company.catchPhrase}"</p>
      <p><strong>Business:</strong> {user.company.bs}</p>
      <Link to="/" className="back-button">Back to Contacts</Link>
    </div>
  );
};

export default ContactDetail;
