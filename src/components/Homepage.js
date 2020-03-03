import React from "react" ;
import {Nav,Navbar,Button,Form,FormControl} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
const Homepage=()=>
{
    return(
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/company">Comapany</Nav.Link>
          <Nav.Link href="/reviews">Reviews</Nav.Link>
          <Nav.Link href="/salary">Salary</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    );
}
export default Homepage;