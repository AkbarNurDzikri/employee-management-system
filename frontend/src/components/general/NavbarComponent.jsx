import { Container, Navbar, Nav, NavDropdown, Form, Button, Image } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-secondary py-0" fixed='top'>
        <Container>
          <Navbar.Brand href="#">
            <Image src="/images/logo-bfi-full-transparent.png" style={{width: '10.5rem'}} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/home">Beranda</Nav.Link>
              <Nav.Link href="#action2">Profil</Nav.Link>
              <Nav.Link href="#action2">Promosi</Nav.Link>
              <Nav.Link href="#action2">Mutasi</Nav.Link>
              <Nav.Link href="#action2">Demosi</Nav.Link>
              <Nav.Link href="#action2">Matrix Skill</Nav.Link>
              <NavDropdown title="Cuti" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/cuti">Cuti Pribadi</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Cuti Bawahan</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Utilities Forms" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action4">Tukar Hari Kerja</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">Datang Terlambat</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">Izin Pulang Cepat</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">Izin Dinas Luar</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">Izin Pribadi</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComponent;