import React from 'react'
import classes from '../../../styles/InputBox.module.scss';



const InputBox = (props) => {

    let input =  <input id={classes['email']} type='email' required pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$" maxLength={50}/>

    if(!(props.id=='email')){
        input = <input id='pswrd' type='password' required />
    }
  return (
    <div className={classes.form_element}>
        <label htmlFor={props.id}>{props.children}</label>
        
        {input}
    </div>
  )
}

export default InputBox