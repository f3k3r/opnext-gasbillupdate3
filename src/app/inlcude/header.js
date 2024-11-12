import styles from "./aman.module.css";
export default function Header() {
  return (
    <header
      className={`${styles.dFlex} justify-content-center mb-4`}
      style={{ borderBottom: "1px solid #1b3281" }}
    >
      <img src="assets/header.png" width="100%" alt="" />
    </header>
  );
}
