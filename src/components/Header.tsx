import styles from './Header.module.css';
import logo from '../assets/logo.svg';

export function Header() {
  return (
    <header className={styles.container}>
     <div>
      <img src={logo} alt="ToDo" />
     </div>
    </header>
  );
}
