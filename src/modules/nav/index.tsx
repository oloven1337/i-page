import { useEffect, useState, ChangeEvent } from "react";
import { useLocation } from "react-router-dom";
import cs from "classnames";
import { useTranslation } from "react-i18next";

import { Link } from "../../ui/link";
import { routes } from "../../constans/routes";
import styles from "./styles.module.css";
import { ReactThemeToggleButton } from "../theme-toggle-button";
import { useCurrentColorScheme } from "../../hooks/useCurrentColorScheme";

export const Nav = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;
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
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }

  function changeLanguageHandler() {
    if (currentLanguage === "ru") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("ru");
    }
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        {routes.map(({ name, to }) => (
          <Link
            key={name}
            className={cs(
              styles.navItem,
              isCurrentPage(to),
              name === "blog" && styles.linkIsDisabled
            )}
            to={to}
          >
            {t(`nav.${name}`)}
          </Link>
        ))}
      </div>
      <div className={styles.navSettings}>
        <button className={styles.setLanguage} onClick={changeLanguageHandler}>
          {currentLanguage === "ru" ? "ru" : "en"}
        </button>
        <ReactThemeToggleButton
          isDark={"dark" === currentColorScheme}
          onChange={switchTheme}
        />
      </div>
    </nav>
  );
};
