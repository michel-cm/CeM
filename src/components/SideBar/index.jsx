import ToggleTheme from "../ToggleTheme";
import * as C from "./styles";
import { menu } from "../../helpers/menu";
import { Link } from "react-router-dom";
import { shade } from "polished";

import { useTheme } from "../../hooks/useTheme";
import { useEffect, useState } from "react";

const SideBar = () => {
  const { isDarkTheme } = useTheme();

  const [colorHover, setColorHover] = useState();

  const [pathName, setPathName] = useState(window.location.pathname);

  function handleCurrentPathName() {
    setPathName(window.location.pathname);
  }

  useEffect(() => {
    isDarkTheme === "dark"
      ? setColorHover(shade(0.2, "#222"))
      : setColorHover(shade(0.4, "#ED3237"));
  }, [isDarkTheme]);

  return (
    <C.Container>
      Logo
      <C.AreaMenuItems>
        {menu.map((item, index) => {
          return (
            <C.MenuItem
              key={index}
              color={colorHover}
              className={pathName == item.to ? "selected" : ""}
              onClick={handleCurrentPathName}
            >
              <item.icon
                style={{
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                }}
              />
              <Link to={item.to}>
                <p>{item.title}</p>
              </Link>
            </C.MenuItem>
          );
        })}
      </C.AreaMenuItems>
      <ToggleTheme />
    </C.Container>
  );
};

export default SideBar;
