import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function SideBar() {
    return <div className="container">
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Presupuesto</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="login" to={'login'}>Login</Nav.Link>
                        <Nav.Link href="ingresos" to={'ingresos'}>Ingresos</Nav.Link>
                        <Nav.Link href="gastos" to={'gastos'}>Gastos</Nav.Link>
                        <Nav.Link href="usuarios" to={'usuarios'}>Usuarios</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
}

/* export default function SideBar() {
    return <div className="container">
        <nav className="navbar navbar-expand-ms navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a><Link aria-current="page" href="#" to={'login'}>login</Link> </a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'gastos'}>gastos</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link" to={'ingresos'}>ingresos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'usuarios'}>Usuarios</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
} */

{/* <Link to={'login'}>login</Link>
<Link to={'gastos'}>gastos</Link>
<Link to={'ingresos'}>ingresos</Link>
<Link to={'usuarios'}>Usuarios</Link> */}