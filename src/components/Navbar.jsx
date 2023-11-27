import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigator() {
  return(
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><img src="prepr.png"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Explore</Nav.Link>
            <Nav.Link>Dashboard</Nav.Link>
            <Nav.Link>My Challenges</Nav.Link>
            <Nav.Link>My Labs</Nav.Link>
            <Nav.Link>My Projects</Nav.Link>
            <Nav.Link>Career Explorer</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div>
          <button type="button" class="btn"><i class="fa-solid fa-bell"></i></button>
          <button type="button" class="btn"><i class="fa-solid fa-comment"></i></button>
          <button type="button" class="btn"><i class="fa-solid fa-circle-question"></i></button>
        </div>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        </form>
      </Container>
    </Navbar>
  )
}