import React from 'react'
import './Input.css'

const Input = (props) => {
    return (
        <input type={props.type} onChange={props.onChange} value={props.value} placeholder={props.placeholder}/>
    )
}

export default Input
