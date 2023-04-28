import { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, NavLink } from "react-router-dom";


function Layout() {
  return (
<>
    <Nav variant="pills" className='links' defaultActiveKey="/home">
      <Nav.Item>
        <NavLink to="africa">Africa</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="americas">Americas</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="europe">europe</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="oceania">oceania</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="asia">asia</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/">Home</NavLink>
      </Nav.Item>
    </Nav>
    <Outlet />
</>
  );
}
{/* <NavDropdown.Item ele>Africa</NavDropdown.Item>
<NavDropdown.Item  classList="dropdown-item">America</NavDropdown.Item>
<NavDropdown.Item href="#action5">Asia</NavDropdown.Item>
<NavDropdown.Item href="#action5">Europe</NavDropdown.Item>
<NavDropdown.Item href="#action5">Oceania†</NavDropdown.Item> */}

export default Layout;