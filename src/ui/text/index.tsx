import { FC, ReactNode } from "react";
import cn from "classnames";

import styles from "./styles.module.css";

interface Props {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  children: ReactNode;
  className?: string;
}

export const Text: FC<Props> = ({ type, children, className }) => {
  const tagMap: { [key in typeof type]: keyof JSX.IntrinsicElements } = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    p: "p",
    span: "span",
  };

  const Tag = tagMap[type];

  return <Tag className={cn(styles.text, className)}>{children}</Tag>;
};
