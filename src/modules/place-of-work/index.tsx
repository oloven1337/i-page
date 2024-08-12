import { FC } from "react";

import { PlaseOfWork } from "../../models/plase-of-work";
import { Text } from "../../ui/text";

import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";

interface Props extends PlaseOfWork {}

export const PlaceOfWork: FC<Props> = ({
  dateTitle,
  companyName,
  description,
  site,
  post,
  responsibilities,
  projects,
  technologies,
}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.timelineWrapper}>
        <div className={styles.timelineCircle}></div>
        <div className={styles.timelineLine}></div>
      </div>
      <div>
        <Text className={styles.companyName} type="h5">
          {companyName}
        </Text>
        <Text className={styles.date} type="h6">
          {dateTitle}
        </Text>
        <a href={site}>{site}</a>
        <Text type="p" className={styles.description}>
          <div>
            <b>{post}</b>
          </div>
          {description}
        </Text>
        <div>
          {!!projects?.length && (
            <div className={styles.description}>
              <Text type="h5" className={styles.projectTitle}>
                {t("profile.projects") + ":"}
              </Text>
              <div className="ml-3">
                {projects?.map((project) => (
                  <div className="mb-1" key={project.name}>
                    <Text type="p">- {project.name}</Text>
                    <Text className="opacity-70 ml-3" type="p">
                      {project.description}
                    </Text>
                    <div>
                      {project.technologies?.map((tech) => (
                        <Text className="opacity-50" type="span" key={tech}>
                          #{tech}&nbsp;
                        </Text>
                      ))}
                    </div>
                    <div className="border-b border-[#f66969] my-2" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div>
          {responsibilities?.map((responsibility) => (
            <Text
              type="p"
              className={styles.responsibility}
              key={responsibility}
            >
              - {responsibility}
            </Text>
          ))}
        </div>
        <div>
          {technologies?.map((tech) => (
            <Text className="opacity-50" type="span" key={tech}>
              #{tech}&nbsp;
            </Text>
          ))}
        </div>
      </div>
    </div>
  );
};
