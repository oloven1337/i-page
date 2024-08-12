import { useTranslation } from "react-i18next";

import { Text } from "../../ui/text";

export const Profile = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Text type="h3">{t("profile.name")}</Text>
      <Text type="h4">{t("profile.post")}</Text>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
