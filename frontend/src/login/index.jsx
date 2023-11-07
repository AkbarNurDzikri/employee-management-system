import { Button, Container, Form, FloatingLabel, Row, Col } from 'react-bootstrap';
import { ShieldLock, PersonCircle } from 'react-bootstrap-icons';
import { useState } from 'react';
import executeLogin from './executeLogin.js';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    await executeLogin(username, password);
  }

  return (
    <Container style={{minHeight: '100vh'}}>
      <Row className='d-flex align-items-center justify-content-center' style={{minHeight: '100vh'}}>
        <Col md={3}>
          <Form onSubmit={handleLogin}>
            <FloatingLabel
              controlId='username'
              label={
                <span>
                  <PersonCircle size={18} className='me-2' />
                  Username
                </span>
              }
              className='mb-3'
            >
              <Form.Control type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} autoComplete='off' required />
            </FloatingLabel>

            <FloatingLabel
              controlId='password'
              label={
                <span>
                  <ShieldLock size={18} className='me-2' />
                  Password
                </span>
              }
              className='mb-3'
            >
              <Form.Control type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} autoComplete='off' required />
            </FloatingLabel>
            
            <Button variant="primary" type='submit' className='w-100'>
              Masuk
            </Button>

            <p style={{fontSize: '0.8rem'}} className='text-center mt-2'>
              Belum punya akun? <Link to='/'>Daftar</Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginPage;