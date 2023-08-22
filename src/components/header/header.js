import Image from "next/image";

import Link from "next/link";

import styles from "./header.module.css";

import { format, parseISO } from "date-fns";

export default function Header({ user }) {
  return (
    <div className={styles.main}>
      <Image
        className={styles.picture}
        src={user.avatarUrl}
        width="300"
        height="300"
        alt={user.username}
      />
      <div className={styles.profile}>
        <p className={styles.name}>{user.name}</p>
        <p>{user.username}</p>
        <Link href={user.profileUrl} className={styles.profileUrl}>
          {user.profileUrl}
        </Link>
      </div>
      <div>
        <p>criado em:</p>
        <p className={styles.date}>
          {format(parseISO(user.created), "dd/MM/yyyy ")}
        </p>
        <p className={styles.followers}>Seguidores: {user.followers}</p>
        <p className={styles.following}>Seguindo: {user.following}</p>
        <p className={styles.location}>{user.location}</p>
      </div>
    </div>
  );
}
