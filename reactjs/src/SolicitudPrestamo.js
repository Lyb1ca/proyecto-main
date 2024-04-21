import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Card, Form, Button, Alert } from "react-bootstrap";

function SolicitudPrestamoX() {
  const [valorUF, setValorUF] = useState(null);
  const [nombre, setNombre] = useState('');
  const [rut, setRut] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [monto, setMonto] = useState('');
  const [solicitudEnviada, setSolicitudEnviada] = useState(false);

  useEffect(() => {
    axios.get("https://mindicador.cl/api/uf")
      .then(res => {
        const data = res.data;
        if (data.serie && data.serie.length > 0) {
          setValorUF(data.serie[0].valor);
        }
      });
  }, []);

  const enviarSolicitud = () => {
    setSolicitudEnviada(true);
  };

  // Estilos personalizados
  const cardStyle = {
    width: '100%', // Hacer que se adapte al contenedor
    backgroundColor: '#f8f9fa',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    padding: '15px',
    color: '#333',
    margin: '20px 0'
  };

  const buttonStyle = {
    backgroundColor: '#0056b3',
    borderColor: '#0056b3',
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: '10px'
  };

  return (
    <>
      <Card style={cardStyle}>
        <Card.Body>
          <Card.Title>Valor actual de la UF</Card.Title>
          {valorUF && <Card.Text>${valorUF.toFixed(2)}</Card.Text>}
        </Card.Body>
      </Card>

      <Card style={cardStyle}>
        <Card.Body>
          <Card.Title>Solicitar Préstamo</Card.Title>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nombre: </Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Ingrese su nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>RUT: </Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Ingrese su RUT"
                value={rut}
                onChange={(e) => setRut(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Número de Teléfono: </Form.Label>
              <Form.Control 
                type="tel" 
                placeholder="Ingrese su número de teléfono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Correo Electrónico: </Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Ingrese su correo electrónico"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Monto: </Form.Label>
              <Form.Control 
                type="number" 
                placeholder="Ingrese el monto"
                value={monto}
                onChange={(e) => setMonto(e.target.value)} />
            </Form.Group>

            <Button 
              style={buttonStyle}
              onClick={enviarSolicitud}
              disabled={solicitudEnviada}>
              Solicitar Préstamo
            </Button>
          </Form>
        </Card.Body>
      </Card>

      {solicitudEnviada && 
        <Alert variant="success" style={{ marginTop: '20px' }}>
          Solicitud enviada
        </Alert>
      }
    </>
  );
}

export default SolicitudPrestamoX;

