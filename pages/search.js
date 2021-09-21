import Link from "next/link";
import styles from "../styles/Home.module.css";

const Search = () => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        onChange={(e) => {
          const value = e.target.value;

          window.history.replaceState("/search", "", `/${value}`);
        }}
      />
      <Link href="/random">random</Link>
    </div>
  );
};

export default Search;
