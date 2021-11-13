import React from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import './NavBar.css'

const NavBar = () =>{
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#">Top 10 Movies</Navbar.Brand>
            </Container>
        </Navbar>
    
    );
}

export default NavBar;