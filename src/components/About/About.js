import React from "react";
import classes from "./About.module.scss";
import IconElectric from "../../images/icon-snappy-process.svg";
import IconMoney from "../../images/icon-affordable-prices.svg";
import IconPerson from "../../images/icon-people-first.svg";

const ABOUTUS = [
  {
    icon: IconElectric,
    name: "Icon Electric",
    title: "Snappy Process",
    text: "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.",
  },
  {
    icon: IconMoney,
    name: "Icon Money",
    title: "Affordable Prices",
    text: "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
  },
  {
    icon: IconPerson,
    name: "Icon Person",
    title: "People First",
    text: "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.",
  },
];
const About = () => {
  return (
    <div className={classes.about}>
      <h1 className={classes.about__heading}>We're different</h1>
      <div className={classes.about__features}>
        {ABOUTUS.map((feature) => (
          <div className={classes.about__feature}>
            <img src={feature.icon} alt={feature.name} className={classes.about__icon} />
            <h4 className={classes.about__title}>{feature.title}</h4>
            <p className={classes.about__text}>{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
