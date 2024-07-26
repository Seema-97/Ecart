import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useMedia } from 'react-use';
import { HEADER_MENUS , routes } from './Routes';
import {Link as RouterLink} from 'react-router-dom' 
import { useState } from 'react';
import './Header.css'

function MyNavbar() {

  const isLargeScreen = useMedia( '(min-width : 992px)') ;
  const [isSideNavVisible , setIsSideNavVisible] = useState(false)
 
  const handleSideNavToggle = () => {
    if(!isLargeScreen) {
      setIsSideNavVisible(!isSideNavVisible)
    }
  }

  return (
    <>
        <div className="ia-header">
        <Navbar expand={"lg"} className="ia-navbar">
          <Container fluid>
            <Navbar.Brand>
              <RouterLink className=' text-dark text-decoration-none' to={routes.home}>
                Digital Hisab
              </RouterLink>
              </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} 
            onClick={handleSideNavToggle}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
              show={isSideNavVisible}
              onHide={() => setIsSideNavVisible(false)}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Inva
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                 {HEADER_MENUS.map(item => (
                  //  <Nav.Link href="#action1">Home</Nav.Link>
                  <RouterLink to={item.pathName} key={item.id} className={`nav-link ${isLargeScreen ? "text-light" : "text-dark"}`} 
                  onClick={handleSideNavToggle}
                  >
                    {item.itemName}
                  </RouterLink>
                 ))}
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-lg`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        </div>
    </>
  );
}

export default MyNavbar;