import { 
  Container, 
  Nav, 
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NavigationBar() {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Lincoln Bunker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/contact')}>Contact Me</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item> */}
              <NavDropdown.Item onClick={() => navigate('/projects/alpine-twin-peak-maintenance')}>
                Alpine Twin Peak Maintenance
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/projects/national-parks')}>National Parks</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item onClick={() => navigate('/projects/diet-bank')}>
                Diet Bank
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;