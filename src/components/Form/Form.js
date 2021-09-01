import React from 'react'
import './Form.css'

const Form = (props) => {
    return (
        <form onSubmit={props.onSubmit} className={props.className}>{props.children}</form>
    )
}

export default Form
