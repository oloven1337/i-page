export const useCurrentColorScheme = () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
    return 'dark';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    return 'light';
  }
}

// window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
//   const newColorScheme = event.matches ? "dark" : "light";
// });