import { shade } from "polished";

import Switch from "react-switch";

import { useTheme } from "../../hooks/useTheme";

const ToggleTheme = () => {
  const { changeTheme, isDarkTheme } = useTheme();

  return (
    <Switch
      onChange={changeTheme}
      checked={isDarkTheme === "dark"}
      checkedIcon={false}
      uncheckedIcon={false}
      height={10}
      width={40}
      handleDiameter={14}
      offColor={shade(0.4, "#ED3237")}
      onColor={shade(0.2, "#222")}
    />
  );
};

export default ToggleTheme;
