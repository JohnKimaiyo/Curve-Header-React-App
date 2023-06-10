import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Commodities</Nav.Link>
            <Nav.Link href="#pricing">Stocks</Nav.Link>
            <Nav.Link href="#features">Bonds</Nav.Link>
            <Nav.Link href="#pricing">Forex</Nav.Link>
            <Nav.Link href="#features">Crypto</Nav.Link>
            <Nav.Link href="#pricing">ETFs</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />

      <br />
    </>
  );
}

export default Navigation;
