import React, { FC } from "react";
import { NavLink } from "react-router-dom";

import "./link.module.css";

interface Props {
  children: React.ReactNode;
  to: string;
  className: string;
}

export const Link: FC<Props> = ({ children, to, className }) => {
  return (
    <NavLink to={to} className={className}>
      {children}
    </NavLink>
  );
};
