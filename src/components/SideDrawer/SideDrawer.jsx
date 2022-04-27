import React from 'react'
import classes from '../../styles/SideDrawer.module.scss';
import HamBurgerButton from './HamBurgerButton/HamBurgerButton'

const SideDrawer = () => {
  return (
    <div className={classes.sidedrawer}>
        <HamBurgerButton/>
    </div>
  )
}

export default SideDrawer