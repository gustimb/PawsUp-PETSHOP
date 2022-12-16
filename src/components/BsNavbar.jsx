import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardWidget from './CardWidget';
import { Link } from 'react-router-dom';

const BsNavbar = () => {
    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand as={Link} to="/"><img className='NavBarLogo' src="https://res.cloudinary.com/dhn5dbtsr/image/upload/v1671212094/PawsUP-logo2_1_fsqsve.png" alt="PAWS UP logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/category/1">Alimentos</Nav.Link>
                        <Nav.Link as={Link} to="/category/2">Accesorios</Nav.Link>
                        <Nav.Link as={Link} to="/category/3">Higiene y limpieza</Nav.Link>
                        <Nav.Link as={Link} to="/category/4">Salud</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <CardWidget />
        </header>
    )
}

export default BsNavbar;
