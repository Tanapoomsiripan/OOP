import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BrandExample() {
  return (
    <>
      <Navbar  bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="./option/img/1.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            HomePage
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;