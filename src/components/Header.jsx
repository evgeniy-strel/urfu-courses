import React from 'react'
import {Nav, Navbar, Container, Button, Form} from 'react-bootstrap'

export default function NaviBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">URFU Courses</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#login">Вход</Nav.Link>
                        <Nav.Link href="#FAQ">FAQ</Nav.Link>

                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}