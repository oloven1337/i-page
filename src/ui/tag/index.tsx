import { FC } from "react";

import "./styles.css";

interface Props {
  text: string;
}

export const Tag: FC<Props> = ({ text }) => {
  return <div className="text">{text}</div>;
};
