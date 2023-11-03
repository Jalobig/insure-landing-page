import React from 'react'
import classes from './Main.module.scss'
import About from '../../components/About/About';
import CTA from '../../components/CTA/CTA';

const Main = () => {
  return (
    <main className={classes.main}>
        <About />
        <CTA />
    </main>
  )
}

export default Main