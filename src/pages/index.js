import styles from "../styles/index.module.css";
import SearchCard from "../../src/components/searchCard/searchCard";

import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [repositoryFound, setRepositoryFound] = useState(false);

  return (
    <div className={styles.background}>
      <SearchCard
        username={username}
        setUsername={setUsername}
        repositoryFound={repositoryFound}
        setRepositoryFound={setRepositoryFound}
      />
    </div>
  );
}
