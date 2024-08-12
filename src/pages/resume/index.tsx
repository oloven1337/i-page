import { Fragment } from "react";
import { Profile } from "../../modules/profile";
import { PlaceOfWork } from "../../modules";
import { resumeData } from "../../mocks";

import styles from "./styles.module.css";

export const Resume = () => {
  return (
    <div className={styles.container}>
      <Profile />
      <div>
        {resumeData.map((resume, idx) => (
          <Fragment key={idx}>
            {/* <div>{t("text")}</div> */}
            <PlaceOfWork {...resume} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
