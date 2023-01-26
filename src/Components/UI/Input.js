import React from 'react'
import Classes from './Input.module.css'

const Input = React.forwardRef((props, ref)=>{
  return (
    <div className={Classes.input}>
        <lable>{props.label}</lable>
<input ref={ref} {...props.input}/>
    </div>
  )
})

export default Input