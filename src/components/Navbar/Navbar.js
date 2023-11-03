import React from 'react'
import classes from './Navbar.module.scss'
import Logo from '../../images/logo.svg'
import Button from '../Button/Button';

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <img src={Logo} alt='Logo of Insure' className={classes.navbar__logo}/>
      <ul className={classes.navbar__nav}>
        <li className={classes['navbar__nav--item']}>How we work</li>
        <li className={classes['navbar__nav--item']}>Blog</li>
        <li className={classes['navbar__nav--item']}>Account</li>
        <li className={classes['navbar__nav--item']}><Button theme='dark'>View Plans</Button></li>
      </ul>

      
    </nav>
  )
}

export default Navbar