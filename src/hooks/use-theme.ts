const useTheme = () => {
  const handleTheme = () => {
    const html = document.getElementsByTagName("html")[0];
    const className = html.className === "light" ? "dark" : "light";

    html.className = className;
  };

  const getTheme = () => {
    const html = document.getElementsByTagName("html")[0];
    const className = html.className === "light" ? "light" : "dark";

    html.className = className;
  };

  return {
    handleTheme,
    getTheme,
  };
};

export { useTheme };
