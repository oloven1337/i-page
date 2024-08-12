export const useCurrentColorScheme = () => {
  const localTheme: "light" | "dark" | null = localStorage.getItem("theme") as
    | "light"
    | "dark"
    | null;

  if (localTheme) {
    document.documentElement.setAttribute("data-theme", localTheme);
    return localTheme;
  }

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.documentElement.setAttribute("data-theme", "dark");
    return "dark";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    return "light";
  }
};
