import React from 'react'
import Classes from './Input.module.css'

function Input(props) {
  return (
    <div className={Classes.input}>
        <lable>{props.label}</lable>
<input {...props.input}/>
    </div>
  )
}

export default Input