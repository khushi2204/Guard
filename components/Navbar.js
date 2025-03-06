import styles from "../styles/Home.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span style={{ color: "#00bfff", fontWeight: "bold" }}>CYBER</span>GUARD
      </div>
      <ul className={styles.navLinks}>
        <li>Home</li>
        <li>Core Features</li>
        <li>Advanced Tools</li>
        <li>About Us</li>
      </ul>
    </nav>
  );
}
