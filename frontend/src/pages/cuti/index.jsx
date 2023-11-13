import React, { useState, useEffect } from 'react';
import NavbarComponent from '../../components/general/NavbarComponent'
import axios from 'axios';
import { Container, Form, FloatingLabel, Button, InputGroup } from 'react-bootstrap';
import validationDate from './validationDate';

const CutiPage = () => {
  const [tglMulai, setTglMulai] = useState('');
  const [tglSelesai, setTglSelesai] = useState('');
  const [setengahHari, setSetengahHari] = useState(false);
  const [hariLibur, sethariLibur] = useState(false);
  const [jumlahHariLibur, setJumlahHariLibur] = useState('');
  const [keteranganCuti, setKeteranganCuti] = useState('');
  const [hariCuti, setHariCuti] = useState(0);
  const [btnDisabled, setBtnDisabled] = useState(false);

  useEffect(() => {
    const result = validationDate(tglMulai, tglSelesai);
    
    if(result === false) {
      setBtnDisabled(true);
      setHariCuti('Invalid Date');
    } else {
      setBtnDisabled(false);
      setHariCuti(result);

      if(setengahHari) setHariCuti(result - 0.5);
      if(hariLibur && jumlahHariLibur > 0) setHariCuti(result - jumlahHariLibur);
      if(setengahHari && hariLibur && jumlahHariLibur > 0) setHariCuti(result - 0.5 - jumlahHariLibur);
    }
  }, [tglMulai, tglSelesai, setengahHari, hariLibur, jumlahHariLibur]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      tglMulai: tglMulai,
      tglSelesai: tglSelesai,
      setengahHari: setengahHari,
      hariLibur: hariLibur,
      jumlahHariLibur: jumlahHariLibur,
      keteranganCuti: keteranganCuti
    };

    const response = await axios.post('http://localhost:5000/cuti/submit', formData);
    console.log(response);
  }

  return (
    <>
      <NavbarComponent />
      <Container style={{marginTop: '100px'}}>
        <h3 className="text-center">Formulir Cuti Pribadi</h3>
        <div className='col-md-6 mx-auto d-flex justify-content-center'>
          <span><b>Saldo Cuti: 3 Hari</b></span> &nbsp; | &nbsp;
          <span className={hariCuti === 'Invalid Date' ? 'text-danger' : 'text-success'}><b>{hariCuti === 'Invalid Date' ? 'Tanggal tidak valid !' : `Ambil Cuti: ${hariCuti} Hari`}</b></span>
        </div>

        <Form onSubmit={handleSubmit} className='mb-3 col-md-6 mx-auto'>
          <FloatingLabel controlId='tglMulai' label='Tanggal Mulai' className='mb-3' >
            <Form.Control type="date" placeholder="Tanggal Mulai" onChange={(e) => setTglMulai(e.target.value)} required />
          </FloatingLabel>

          <FloatingLabel controlId='tglSelesai' label='Tanggal Selesai' className='mb-3' >
            <Form.Control type="date" placeholder="Tanggal Selesai" onChange={(e) => setTglSelesai(e.target.value)} required />
          </FloatingLabel>

          <Form.Check type="switch" id='setengahHari' label='Setengah hari' onChange={() => setSetengahHari(!setengahHari)} />
          <Form.Check type="switch" id='hariLibur' label='Hari libur' onChange={() => sethariLibur(!hariLibur)} />

          <InputGroup className={hariLibur ? 'mb-3' : 'mb-3 d-none'}>
            <Form.Control type="number" id='jumlahHariLibur' onChange={(e) => setJumlahHariLibur(e.target.value)} required={hariLibur ? true : false} />
            <InputGroup.Text>Hari</InputGroup.Text>
          </InputGroup>

          <FloatingLabel controlId='keteranganCuti' label='Keterangan' className='my-3'>
            <Form.Control as="textarea" placeholder="Keterangan" onChange={(e) => setKeteranganCuti(e.target.value)} required />
          </FloatingLabel>

          <Button type='submit' variant="primary" className='w-100' disabled={btnDisabled}>
            Kirim
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default CutiPage;