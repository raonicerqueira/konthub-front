import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import { format, parseISO } from "date-fns";

export default function Header({ user }) {
  const {
    avatarUrl,
    name,
    username,
    profileUrl,
    created,
    followers,
    following,
    location,
  } = user;

  return (
    <div className={styles.main}>
      <Image
        className={styles.picture}
        src={avatarUrl}
        width="300"
        height="300"
        alt={username}
      />
      <div className={styles.profile}>
        <p className={styles.name}>{name}</p>
        <p>{username}</p>
        <Link href={profileUrl} className={styles.profileUrl}>
          {profileUrl}
        </Link>
      </div>
      <div>
        <p>criado em:</p>
        <p className={styles.date}>
          {format(parseISO(created), "dd/MM/yyyy ")}
        </p>
        {followers && (
          <p className={styles.followers}>Seguidores: {followers}</p>
        )}
        {following && <p className={styles.following}>Seguindo: {following}</p>}
        {location && <p className={styles.location}>{location}</p>}
      </div>
    </div>
  );
}
