import React from 'react'
import classes from './Header.module.scss'
import Navbar from '../../components/Navbar/Navbar';
import Intro from '../../components/Intro/Intro';

const Header = () => {
  return (
    <header className={classes.header}>
        <Navbar/>
        <Intro />
    </header>
  )
}

export default Header