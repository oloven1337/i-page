import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import cs from 'classnames';

import { Link } from '../../ui/link';
import styles from './nav.module.css';
import { routes } from '../../constans/routes'

export const Nav = () => {
  const [currentPage, setCurrentPage] = useState('');
  const location = useLocation();

  useEffect(() => {
    console.log(location)
    setCurrentPage(location.pathname);
  }, [location]);

  return (
    <nav className={styles.nav}>
      {/*<Link className={styles.navItem} to="/">Main</Link>*/}
      {/*<Link className={styles.navItem} to="/game">Games</Link>*/}
      {/*<Link className={styles.navItem} to="/resume">Резюме</Link>*/}
      {routes.map(({ name, to }) => (
        <Link key={name} className={cs(styles.navItem, currentPage === to ? styles.activeItem : '')} to={to}>
          {name}
        </Link>
      ))}
    </nav>
  );
};