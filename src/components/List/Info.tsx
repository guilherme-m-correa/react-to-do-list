import styles from "./Info.module.css";

interface Props {
  createdTasks: number;
  completedTasks: number;
}

export function Info({ createdTasks, completedTasks }: Props) {
  return (
    <header className={styles.container}>
      <aside>
        <p>Created Tasks</p>
        <span>{createdTasks}</span>
      </aside>

      <aside>
        <p>Completed</p>
        <span>{createdTasks === 0 ? 0 : `${completedTasks} of ${createdTasks}`}</span>
      </aside>
    </header>
  );
}
