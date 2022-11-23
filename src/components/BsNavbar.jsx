import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardWidget from './CardWidget';

const BsNavbar = () => {
    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">PAWS UP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#link">Alimentos</Nav.Link>
                        <Nav.Link href="#link">Accesorios</Nav.Link>
                        <Nav.Link href="#link">Higiene y limpieza</Nav.Link>
                        <Nav.Link href="#link">Salud</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <CardWidget />
        </header>
    )
}

export default BsNavbar;
