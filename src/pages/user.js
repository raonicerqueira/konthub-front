import styles from "../styles/userFound.module.css";

import Header from "../components/header/header";

import Card from "../components/card/card";

export default function User(username) {
  const APIURL1 = `http://localhost:8080/users/${username}/repositories`;
  const APIURL2 = `http://localhost:8080/users/${username}`;

  const response1 = fetch(APIURL1);
  const response2 = fetch(APIURL2);

  const repositories = response1.json();
  const user = response2.json();

  return (
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
  );
}
