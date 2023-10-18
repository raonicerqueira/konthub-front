import styles from "./searchCard.module.css";
import Button from "@/components/button/button";
import User from "@/pages/user";

export default function SearchCard({
  username,
  setUsername,
  repositoryFound,
  setRepositoryFound,
}) {
  const searchUser = async () => {
    const APIURL = `http://localhost:8080/users/${username}/repositories`;

    try {
      const response = await fetch(APIURL);
      setRepositoryFound(response.status === 200);
    } catch (error) {}
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchUser();
  };

  return (
    <>
      {!repositoryFound ? (
        <div className={styles.card}>
          <h3 className={styles.title}>Digite um nome de usuário GitHub:</h3>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              className={styles.input}
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Button type="submit">Pesquisar</Button>
          </form>
        </div>
      ) : (
        <User username={username} />
      )}
    </>
  );
}
