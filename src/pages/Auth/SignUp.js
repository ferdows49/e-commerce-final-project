import React from 'react'
import './SignUp.css'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Form from '../../components/Form/Form'

const SignUp = () => {
  return (
    <Form style={{left: 0}} className="signup">
      <Input type="text" placeholder="First Name" />
      <Input type="text" placeholder="Last Name" />
      <Input type="text" placeholder="User Name" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="text" placeholder="Phone Number" />
      <Input type="text" placeholder="City" />
      <Button>Sign Up</Button>
    </Form>
  )
}

export default SignUp
