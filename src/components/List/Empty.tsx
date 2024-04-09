import styles from "./Empty.module.css";
import clipboard from "../../assets/clipboard.svg";

export function Empty() {
  return (
    <div className={styles.container}>
      <img src={clipboard} alt="Clipboard" />
      <p>
        <strong>You don't have any tasks yet</strong>
        Create tasks and organize your to-dos
      </p>
    </div>
  );
}
