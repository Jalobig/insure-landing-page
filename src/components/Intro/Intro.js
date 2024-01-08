import React from "react";
import classes from "./Intro.module.scss";
import Button from "../Button/Button";
import ImgDesktop from "../../images/image-intro-desktop.jpg";
import ImgMobile from "../../images/image-intro-mobile.jpg";
import BGPatternLeftDesktop from "../../images/bg-pattern-intro-left-desktop.svg";
import BGPatternRightDesktop from "../../images/bg-pattern-intro-right-desktop.svg";
import BGPatternLeftMobile from "../../images/bg-pattern-intro-left-mobile.svg";
import BGPatternRightMobile from "../../images/bg-pattern-intro-right-mobile.svg";
import useMediaQuery from "../../hooks/useMediaQuery";

const Intro = () => {
  const media = useMediaQuery("only screen and (max-width:1024px");
  const media2 = useMediaQuery("only screen and (max-width:524px");
  return (
    <div className={classes.intro}>
      <div className={classes.intro__group}>
        <div className={classes.intro__info}>
          {!media && (
            <hr
              className={`${classes.intro__line} ${classes["intro__line--light"]}`}
            />
          )}
          <h1 className={classes.intro__heading}>Humanizing your insurance.</h1>
          <p className={classes.intro__text}>
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <Button>view plans</Button>
          {media && (
            <>
              <img
                src={BGPatternLeftMobile}
                alt="Background pattern"
                className={classes.images__left}
              />
              <img
                src={BGPatternRightMobile}
                alt="Background pattern"
                className={classes.images__right}
              />
            </>
          )}
        </div>
        <img
          src={media2 ? ImgMobile : ImgDesktop}
          alt="A happy family holding hand"
          className={classes.intro__image}
        />
      </div>
      <div className={classes.intro__group}>
        <hr
          className={`${classes.intro__line} ${classes["intro__line--dark"]}`}
        />
      </div>
      {!media && (
        <>
          <img
            src={BGPatternLeftDesktop}
            alt="Background pattern"
            className={classes.images__left}
          />
          <img
            src={BGPatternRightDesktop}
            alt="Background pattern"
            className={classes.images__right}
          />
        </>
      )}
    </div>
  );
};

export default Intro;
