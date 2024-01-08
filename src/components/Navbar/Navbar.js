import React, { useState } from "react";
import classes from "./Navbar.module.scss";
import Logo from "../../images/logo.svg";
import Button from "../Button/Button";
import useMediaQuery from "../../hooks/useMediaQuery";
import BGPattern from "../../images/bg-pattern-mobile-nav.svg";
import IconClose from "../../images/icon-close.svg";
import IconHamburger from "../../images/icon-hamburger.svg";

const Navbar = () => {
  const [active, setActive] = useState(true);
  const media = useMediaQuery("only screen and (max-width:650px)");

  const menuHandler = () => {
    setActive((prevState) => !prevState);
  };
  return (
    <nav className={classes.navbar}>
      <img src={Logo} alt="Logo of Insure" className={classes.navbar__logo} />

      {media && (
        <Button>
          <img
            onClick={menuHandler}
            className={classes.navbar__menu}
            src={active ? IconClose : IconHamburger}
            alt={active ? "Icon Close" : "Icon Hamburger"}
          />
        </Button>
      )}
      {(!media || active) && (
        <ul className={classes.navbar__nav}>
          <li className={classes["navbar__nav--item"]}>How we work</li>
          <li className={classes["navbar__nav--item"]}>Blog</li>
          <li className={classes["navbar__nav--item"]}>Account</li>
          <li className={classes["navbar__nav--item"]}>
            <Button className={classes.long__btn} theme={media ? "light" : "dark"}>View Plans</Button>
          </li>
          {media && (
            <img
              className={classes.navbar__pattern}
              src={BGPattern}
              alt="Background Pattern"
            />
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
