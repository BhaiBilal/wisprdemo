import React from 'react'
import { Link } from 'react-router-dom';
import classes from '../../styles/AccessScreenComponent.module.scss';
import Logo from '../Logo/Logo'




const AccessScreenComponent = (props) => {
  return (
    <div className={classes.access}>
        <div className={classes.logo}>
            <Logo/>
        </div>
        <div className={classes.title}>
            <h1>DASHBOARD</h1>
        </div>
        <div className={classes.access_button}>
            <Link to={props.path}>Access</Link>
        </div>
    </div>
  )
}

export default AccessScreenComponent;