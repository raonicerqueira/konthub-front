import { useState, useEffect } from "react";
import axios from "axios";

import styles from "../styles/userFound.module.css";

import Header from "../components/header/header";
import Card from "../components/card/card";

export default function User({ username }) {
  const [repositories, setRepositories] = useState();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/users/${username}/repositories`)
      .then((response) => {
        setRepositories(response.data);
      });

    axios.get(`http://localhost:8080/users/${username}`).then((response) => {
      setUser(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <>
          <div className={styles.background}>
            <header className={styles.header}>
              <Header user={user} />
            </header>
            <>
              <div className={styles.repositories_container}>
                {repositories.map((repository) => (
                  <Card key={repository.id} repository={repository} />
                ))}
              </div>
            </>
          </div>
        </>
      )}
    </>
  );
}
