import styles from "./searchCard.module.css";

import Button from "@/components/button/button";
import User from "@/pages/user";

export default function SearchCard({
  username,
  setUsername,
  repositoryFound,
  setRepositoryFound,
}) {
  const verifyUser = async () => {
    try {
      const APIURL = `http://localhost:8080/users/${username}/repositories`;
      const response = await fetch(APIURL);
      if (response.status === 200) {
        setRepositoryFound(true);
      } else {
        setRepositoryFound(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    verifyUser();
  }

  return (
    <>
      {!repositoryFound && (
        <div className={styles.card}>
          <h3 className={styles.title}>Digite um nome de usuário GitHub:</h3>
          <form
            className={styles.form}
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <input
              className={styles.input}
              type="text"
              name="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
            />
            <Button type="submit">Pesquisar</Button>
          </form>
        </div>
      )}
      {repositoryFound && <User username={username} />}
    </>
  );
}
