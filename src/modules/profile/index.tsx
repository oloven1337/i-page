import { useTranslation } from "react-i18next";

import me from "../../assets/images/me.jpg";
import { Text } from "../../ui/text";
import styles from "./styles.module.css";
import classNames from "classnames";

export const Profile = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center gap-4">
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
    </div>
  );
};
