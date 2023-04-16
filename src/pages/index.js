import styles from "../styles/index.module.css";
import SearchCard from "../../src/components/searchCard/searchCard";
import User from "../pages/user";

import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [repositoryFound, setRepositoryFound] = useState(true);

  return (
    <div className={styles.background}>
      <SearchCard
        username={username}
        setUsername={setUsername}
        setRepositoryFound={setRepositoryFound}
      />
    </div>
  );
}
