import React from "react";
import classes from "./CTA.module.scss";
import Button from "../Button/Button";
import BGPatternDesktop from "../../images/bg-pattern-how-we-work-desktop.svg";
import BGPatternMobile from "../../images/bg-pattern-how-we-work-mobile.svg";
import useMediaQuery from "../../hooks/useMediaQuery";
const CTA = () => {
  const media = useMediaQuery("only screen and (max-width:768px)");
  return (
    <div className={classes.cta}>
      <h1 className={classes.cta__text}>Find out more about how we work</h1>
      <Button>How we work</Button>
      <img
        src={media? BGPatternMobile: BGPatternDesktop}
        alt="Background pattern"
        className={classes.cta__bg}
      />
    </div>
  );
};

export default CTA;
