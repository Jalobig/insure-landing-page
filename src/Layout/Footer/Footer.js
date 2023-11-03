import React from "react";
import classes from "./Footer.module.scss";
import Logo from '../../images/logo.svg'
import IconFacebook from '../../images/icon-facebook.svg'
import IconTwitter from '../../images/icon-twitter.svg'
import IconPinterest from '../../images/icon-pinterest.svg'
import IconInstagram from '../../images/icon-instagram.svg'
import BGPatternDesktop from '../../images/bg-pattern-footer-desktop.svg'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__row}>
        <img src={Logo} alt="Logo of Insure" className={classes.footer__logo} />
        <div className={classes.footer__social}>
          <img src={IconFacebook} alt="Icon Facebook" className={classes.footer__icon} />
          <img src={IconTwitter} alt="Icon Twitter" className={classes.footer__icon} />
          <img src={IconPinterest} alt="Icon Pinterest" className={classes.footer__icon} />
          <img src={IconInstagram} alt="Icon Instagram" className={classes.footer__icon} />
        </div>
      </div>
      <hr className={classes.footer__line} />
      <div className={classes.footer__navigation}>
        <div className={classes.footer__column}>
          <p className={classes['footer__navigation--title']}>Our company</p>
          <ul className={classes['footer__navigation--nav']}>
            <li className={classes['footer__navigation--nav-item']}>How we work</li>
            <li className={classes['footer__navigation--nav-item']}>Why Insure?</li>
            <li className={classes['footer__navigation--nav-item']}>View plans</li>
            <li className={classes['footer__navigation--nav-item']}>Reviews</li>
          </ul>
        </div>
        <div className={classes.footer__column}>
          <p className={classes['footer__navigation--title']}>Help me</p>
          <ul className={classes['footer__navigation--nav']}>
            <li className={classes['footer__navigation--nav-item']}>FAQ</li>
            <li className={classes['footer__navigation--nav-item']}>Terms of use</li>
            <li className={classes['footer__navigation--nav-item']}>Privacy policy</li>
            <li className={classes['footer__navigation--nav-item']}>Cookies</li>
          </ul>
        </div>
        <div className={classes.footer__column}>
          <p className={classes['footer__navigation--title']}>Contact</p>
          <ul className={classes['footer__navigation--nav']}>
            <li className={classes['footer__navigation--nav-item']}>Sales</li>
            <li className={classes['footer__navigation--nav-item']}>Support</li>
            <li className={classes['footer__navigation--nav-item']}>Live chat</li>
          </ul>
        </div>
        <div className={classes.footer__column}>
          <p className={classes['footer__navigation--title']}>Others</p>
          <ul className={classes['footer__navigation--nav']}>
            <li className={classes['footer__navigation--nav-item']}>Careers</li>
            <li className={classes['footer__navigation--nav-item']}>Press</li>
            <li className={classes['footer__navigation--nav-item']}>Licenses</li>
          </ul>
        </div>
        <div></div>
      </div>
      <div className={classes.attribution}>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/Jalobig" target="_blank" rel="noreferrer">
          Jason Alexis
        </a>
        .
      </div>
      <img src={BGPatternDesktop} alt="Background pattern" className={classes.footer__bg} />
    </footer>
  );
};

export default Footer;
