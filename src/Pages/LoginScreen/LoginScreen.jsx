import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm';
import Logo from '../../components/Logo/Logo';
import classes from '../../styles/LoginScreen.module.scss';
import login_image from '../../assets/images/login_image.jpeg'


const LoginScreen = () => {




  return (
    <div className={classes.login_screen}>
      <div className={classes.left_container}>
        <div className={classes.details}>
          <div className={classes.logo}>
            <Logo/>
          </div>
          <div className={classes.title}>
            <h1>Admin Account</h1>
            <h4>Login here with your admin credentials</h4>
          </div>
        </div>

        <div className={classes.form_container}>
          <LoginForm/>
        </div>
      </div>

      <div className={classes.right_container}>
          <img src={login_image}/>        
      </div>
        

    </div>
  )
}

export default LoginScreen;