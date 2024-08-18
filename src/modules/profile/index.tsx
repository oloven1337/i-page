import { useTranslation } from "react-i18next";
import classNames from "classnames";

import me from "../../assets/icons/me.jpg";
import { Text } from "../../ui/text";
import styles from "./styles.module.css";
import github from "../../assets/icons/github.png";
import telegram from "../../assets/icons/telegram.png";

export const Profile = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <img
        className="w-[120px] h-[120px] rounded-full object-cover object-[50%_30%]"
        src={me}
        alt=""
      />
      <div>
        <Text className="font-bold text-2xl" type="h3">
          {t("profile.name")}
        </Text>
        <Text
          className={classNames(styles.post, "text-lg text-center")}
          type="p"
        >
          {t("profile.post")}
        </Text>
      </div>
      <div className="flex items-center gap-4 space-between">
        <ul className={styles.list}>
          <li className={styles.item}>
            <a
              className="flex items-center"
              target="_blank"
              href="https://github.com/oloven1337"
            >
              <Text type="p">GitHub</Text>
              <img className="w-8 h-8 ml-3" src={github} alt="" />
            </a>
          </li>
          <li className={styles.item}>
            <a
              className="flex items-center"
              target="_blank"
              href="https://t.me/ibraggim"
            >
              <Text type="p">Telegram</Text>
              <img className="w-8 h-8 ml-3" src={telegram} alt="" />
            </a>
          </li>
        </ul>
        <Text type="h3" className="text-lg">
          {t("profile.totalExperience")}
          <span className={styles.year}>&nbsp;4&nbsp;</span>
          <span className={styles.year}>{t("profile.years")}</span>
        </Text>
      </div>
    </div>
  );
};
