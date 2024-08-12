import { FC } from "react";

import styles from "./styles.module.css";

interface Props {
  text: string;
}

export const Tag: FC<Props> = ({ text }) => {
  return <div className={styles.text}>{text}</div>;
};
