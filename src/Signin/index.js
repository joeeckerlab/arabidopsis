import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton} from './SigninElements'

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>salk</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Feedbacks on cell annotations</FormH1>
              <FormLabel htmlFor='for'>Name</FormLabel>
                <FormInput htmlFor='name' required />
              <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput htmlFor='email' required />
              <textarea className="p-2 bg-light border">
                Hello there, thank you for contributing your annotations here!
              </textarea>
              &nbsp;&nbsp;&nbsp;
              <FormButton type='submit'>Submit</FormButton>
              {/*<Text>Forgot password</Text>*/}
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn
