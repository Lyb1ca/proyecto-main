import React from 'react';
import SolicitudPrestamo from "./tarea.js";
import './App.css'; // Asegúrate de que este archivo CSS contiene los estilos discutidos
import prestamo from './valoruf.js';
import SolicitudPrestamoX from './SolicitudPrestamo';

// ola
// vale bro

import {
  Navbar, Nav, Form,Card, FormControl, Button, Container, Row, Col
} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';
import Prestamo from './valoruf.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
          <Container fluid>
            <Navbar.Brand href="#home">Financiera La Clave</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/Información">Información</Nav.Link>
                <Nav.Link as={Link} to="/CalculosUF">CalculosUF</Nav.Link>
                <Nav.Link as={Link} to="/Tareas">Tareas</Nav.Link>
                <Nav.Link as={Link} to="/Prestamos">Prestamos</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="mt-4">
          <Routes>
            <Route path="/CalculosUF" element={
              <Prestamo
                idSolicitud="123456"
                beneficiario="Juan Pérez"
                valor={10000}
                fecha="01-11-2023"
                plazo={12}
                tasa={0.01}
              />
            } />
            <Route path="/Tareas" element={
              <SolicitudPrestamo encargado="Juan Perez" idSolicitud="12345" beneficiario="Pedro Urdemales" monto="1000" fecha="01/11/2023" />
            } />
            <Route path="/Información" element={
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>Fundada en 1977</Card.Title>
                    <Card.Text>
                      Financiera La Clave ha sido un líder en el sector de préstamos desde 1977, ofreciendo soluciones financieras personalizadas para individuos y empresas. Nos especializamos en una variedad de servicios, incluyendo préstamos personales, hipotecarios, y para pequeñas empresas, con un enfoque en proveer términos flexibles y tasas competitivas.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            } />
            <Route path="/" element={
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'Arial, sans-serif', fontSize: '24px' }}>
                <div>Bienvenido a Financiera La Clave</div>
              </div>
            } />

            <Route path="/Prestamos" element={<SolicitudPrestamoX />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;




