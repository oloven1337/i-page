import { useTranslation } from "react-i18next";

export const Resume = () => {
  const { t } = useTranslation();

  return (
    <div>
      resume
      <div>{t("text")}</div>
    </div>
  );
};
