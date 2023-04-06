import { ThemeContext } from "./ThemeContext";
const ThemeState = (props) => {
  let bgColor = "#EAEBEC";
  let primaryColor = "#2E3797;";
  let btnColor = "#5ACA5A";
  let secondaryColor = "#ED9D24";
  let dangerColor = "#FF4B57";
  //  const jetBlack = "#2E2F2F";

  const greyDefault = "#EAEDF1";
  const subTitleTextColor = "#666666";
  const mainTitleTextColor = "#191919";

  return (
    <ThemeContext.Provider
      value={{
        bgColor,
        primaryColor,
        secondaryColor,
        btnColor,
        dangerColor,
        greyDefault,
        subTitleTextColor,
        mainTitleTextColor,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeState;
