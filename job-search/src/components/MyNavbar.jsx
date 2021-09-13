import React from "react";
import { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
export const MyNavbar = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Job Search Engine</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button
          variant="outline-info"
          onclick={props.setSearchQuery(searchQuery)}
        >
          Search
        </Button>
      </Form>
    </Navbar>
  );
};
