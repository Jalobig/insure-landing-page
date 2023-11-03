import React from 'react'
import classes from './Button.module.scss'

const Button = (props) => {
  return (
    <button className={`${classes.button} ${props.theme==='dark'? classes.button__dark: classes.button__light}`}>{props.children}</button>
  )
}

export default Button