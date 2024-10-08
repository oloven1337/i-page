import { FC, ReactNode } from "react";

import "./button.module.css";

interface Props {
  children: ReactNode;
}

export const Button: FC<Props> = ({ children }) => {
  return <button>{children}</button>;
};
