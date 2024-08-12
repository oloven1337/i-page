import { FC } from "react";

import { PlaseOfWork } from "../../models/plase-of-work";
import { Text } from "../../ui/text";

import "./styles.css";

interface Props extends PlaseOfWork {}

export const PlaceOfWork: FC<Props> = ({
  dateTitle,
  companyName,
  description,
  site,
  post,
  responsibilities,
}) => {
  return (
    <div className="container">
      <div className="timeline-wrapper">
        <div className="timeline-circle"></div>
        <div className="timeline-line"></div>
      </div>
      <div>
        <Text className="date" type="h6">
          {dateTitle}
        </Text>
        <Text className="company-name" type="h5">
          {companyName}
        </Text>
        <a href={site}>{site}</a>
        <div>
          {responsibilities?.map((responsibility) => (
            <Text type="p" className="responsibility" key={responsibility}>
              - {responsibility}
            </Text>
          ))}
        </div>
        <Text type="p" className="description">
          <div>
            <b>{post}</b>
          </div>
          {description}
        </Text>
      </div>
    </div>
  );
};
