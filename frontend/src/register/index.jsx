import { Button, Container, Form, FloatingLabel, Row, Col } from 'react-bootstrap';
import { ShieldLock, PersonCircle, EnvelopeAt, PersonVcardFill, ShieldLockFill } from 'react-bootstrap-icons';
import { useState } from 'react';
import executeRegister from './executeRegister.js';
import LoadingIndicator from '../animation/LoadingIndicator.jsx';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    const result = await executeRegister(username, fullname, email, password, confirmPassword);
  
    if(result.success === true) {
      setUsername('');
      setFullname('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
    setIsLoading(false);
  }

  return (
    <Container>
      <Row className='d-flex align-items-center justify-content-center' style={{minHeight: '100vh'}}>
        <Col md={3}>
          <Form onSubmit={handleRegister}>
            <FloatingLabel
              controlId='fullname'
              label={
                <span>
                  <PersonVcardFill size={18} className='me-2' />
                  Nama Lengkap
                </span>
              }
              className='mb-3'
            >
              <Form.Control type="text" placeholder='Nama Lengkap' value={fullname} onChange={(e) => setFullname(e.target.value)} autoComplete='off' required />
            </FloatingLabel>

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
              controlId='Email'
              label={
                <span>
                  <EnvelopeAt size={18} className='me-2' />
                  Email
                </span>
              }
              className='mb-3'
            >
              <Form.Control type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} autoComplete='off' required />
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

            <FloatingLabel
              controlId='confirmPassword'
              label={
                <span>
                  <ShieldLockFill size={18} className='me-2' />
                  Konfirm Password
                </span>
              }
              className='mb-3'
            >
              <Form.Control type="password" placeholder='Konfirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} autoComplete='off' required />
            </FloatingLabel>
            
            <Button variant="primary" type='submit' className='w-100'>
              {isLoading ? <LoadingIndicator /> : 'Daftar'}
            </Button>

            <p style={{fontSize: '0.8rem'}} className='text-center mt-2'>
              Sudah punya akun? <Link to='/login'>Login</Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default RegisterPage;