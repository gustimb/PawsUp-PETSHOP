import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardWidget from './CardWidget';

const BsNavbar = () => {
    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">PAWS UP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/category/1">Alimentos</Nav.Link>
                        <Nav.Link href="/category/2">Accesorios</Nav.Link>
                        <Nav.Link href="/category/3">Higiene y limpieza</Nav.Link>
                        <Nav.Link href="/category/4">Salud</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <CardWidget />
        </header>
    )
}

export default BsNavbar;
