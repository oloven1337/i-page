import { useEffect, useState, ChangeEvent } from "react";
import { useLocation } from "react-router-dom";
import cs from "classnames";

import { Link } from "../../ui/link";
import { routes } from "../../constans/routes";
import styles from "./styles.module.css";
import ReactThemeToggleButton from "../theme-toggle-button";
import { useCurrentColorScheme } from "../../hooks/useCurrentColorScheme";

export const Nav = () => {
  const [currentPage, setCurrentPage] = useState("");
  const location = useLocation();
  const currentColorScheme = useCurrentColorScheme();
  const isCurrentPage = (to: string) =>
    currentPage === to ? styles.activeItem : "";

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  function switchTheme(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        {routes.map(({ name, to }) => (
          <Link
            key={name}
            className={cs(styles.navItem, isCurrentPage(to))}
            to={to}
          >
            {name}
          </Link>
        ))}
      </div>
      <ReactThemeToggleButton
        isDark={"dark" === currentColorScheme}
        onChange={switchTheme}
      />
    </nav>
  );
};
