import { useState, useEffect } from "react";
import axios from "axios";

import styles from "../styles/userFound.module.css";

import Header from "../components/header/header";
import Card from "../components/card/card";

export default function User({ username }) {
  const [repositories, setRepositories] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [reposResponse, userResponse] = await Promise.all([
          axios.get(`http://localhost:8080/users/${username}/repositories`),
          axios.get(`http://localhost:8080/users/${username}`),
        ]);

        setRepositories(reposResponse.data);
        setUser(userResponse.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  return (
    <div className={styles.background}>
      <header className={styles.header}>
        {user && <Header user={user} />}
      </header>
      <div className={styles.repositories_container}>
        {loading
          ? "Loading..."
          : repositories.map((repository) => (
              <Card key={repository.id} repository={repository} />
            ))}
      </div>
    </div>
  );
}
