import {Button, Container, Form, FloatingLabel} from 'react-bootstrap';
import { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const setData = () => {
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
  }

  return (
    <Container className='mt-5'>
      <Form>
        <FloatingLabel controlId='username' label='Username' className='mb-3'>
          <Form.Control type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
        </FloatingLabel>
        <FloatingLabel controlId='password' label='Password' className='mb-3'>
          <Form.Control type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </FloatingLabel>
        <Button variant="primary" onClick={setData}>
          Login
        </Button>
      </Form>
    </Container>
  )
}

export default LoginPage