import styles from "./card.module.css";

import Link from "next/link";

export default function Card({ repository }) {
  return (
    <Link
      className={styles.card}
      key={repository.id}
      href={repository.html_url}
    >
      <p className={styles.name}>{repository.name}</p>
      <p>{repository.description}</p>
    </Link>
  );
}
