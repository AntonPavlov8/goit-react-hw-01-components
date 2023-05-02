import { Link } from 'react-router-dom';

import s from './navbar.module.css';

export const NavBar = () => {
  return (
    <div className={s.navbar}>
      <Link to="/task1" className={s.link}>
        Task 1
      </Link>
      <Link to="/task2" className={s.link}>
        Task 2
      </Link>
      <Link to="/task3" className={s.link}>
        Task 3
      </Link>
      <Link to="/task4" className={s.link}>
        Task 4
      </Link>
    </div>
  );
};
