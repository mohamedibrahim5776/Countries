import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import React, { useState, useEffect, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route , Routes ,HashRouter } from 'react-router-dom';
import ProductList1 from '../product/ProductList';
import Layout from '../Layout/Layout';
import Africa from '../Countries/Africa';
import Asia from '../Countries/Asia';
import Americas from '../Countries/Americas';
import Europe from '../Countries/Europe';
import Oceania from '../Countries/Oceania';
import NoPage from '../Nopage'
function MyNav() {
    
    const iconSolid = useRef();
    const iconRegular = useRef();
    const darkMode = useRef();
    const darkMode1 = useRef();
  

  const focusInput = () => {
    iconSolid.current.classList.toggle('hide')
    iconRegular.current.classList.toggle('hide')
    darkMode.current.classList.toggle('darkMode')
    darkMode1.current.classList.toggle('darkMode1')
    document.body.classList.toggle('darkModeBody')
    document.body.children[1].children[0].children[2].children[0].classList.toggle('darkModeProduct') 
    console.log(document.body.children[1].children[0].children[2].children[0].classList)
    
    };


   return (
    <>
       <Navbar
        id='nav'
        ref={darkMode}
       >
        <Container>
          <Navbar >where in the world?</Navbar>
           <Navbar className=" ms-auto">
             <i ref={iconSolid} className=" hide fa-solid fa-moon"></i>
             <i ref={iconRegular} className="fa-regular fa-moon"></i>
             <Navbar
               id={'dark'}
               onClick={focusInput}   >
                dark mode</Navbar>
          </Navbar>
        </Container>
       </Navbar>
       

       <Navbar ref={darkMode1} expand="lg">
      <Container className='search' >
          <Form className="me-auto d-flex">
            <Form.Control
              type="search"
              placeholder="Search For a Country..."
              className="m-2"
              aria-label="Search"
            />
           </Form>
          <Nav
            className="ms-auto my-2 my-lg-0 country"
            style={{ maxHeight: '100px' }}
           >
            <HashRouter>
              <Routes>
                 <Route path="/" element={<Layout />}>
                  <Route index element={<ProductList1 />} />
                    <Route path="africa" element={<Africa />} />
                    <Route path="americas" element={<Americas />} />
                    <Route path="europe" element={<Europe />} />
                    <Route path="oceania" element={<Oceania />} />
                    <Route path="asia" element={<Asia />}>
                  </Route>
                  <Route path="*" element={<NoPage />} />
                </Route>
              </Routes>
            </HashRouter>
          </Nav>
      </Container>
      </Navbar>
    </>
    );
    
  }

export default MyNav ;