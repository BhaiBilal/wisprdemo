import React from 'react'
import InputBox from './InputBox/InputBox'
import classes from '../../styles/LoginForm.module.scss';

const LoginForm = () => {
  return (
    <form className={classes.form}>
        <InputBox id='email'>Email Address</InputBox>
        <InputBox id='pswrd'>Password</InputBox>
        
        <div className={classes.submit_btn}>
            <button type ='submit'>LOGIN</button>
        </div>
    </form>
  )
}

export default LoginForm