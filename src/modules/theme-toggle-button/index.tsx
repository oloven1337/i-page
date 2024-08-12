import { FC, ChangeEvent } from "react";
import styles from "./styles.module.css";

interface Props {
  isDark: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const ReactThemeToggleButton: FC<Props> = ({ isDark, onChange }) => (
  <label
    className={styles.container}
    title={isDark ? "Activate light mode" : "Activate dark mode"}
    aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
  >
    <input type="checkbox" defaultChecked={!isDark} onChange={onChange} />
    <div />
  </label>
);
