import React, { useState } from "react";
import { Card, Button } from 'react-bootstrap';

function SolicitudPrestamo(props) {
  const [estadoSolicitud, setEstadoSolicitud] = useState("Pendiente");

  // Estilos personalizados para el componente
  const cardStyle = {
    width: '18rem',
    backgroundColor: '#f8f9fa', // Fondo claro para la tarjeta
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Sombra suave
    borderRadius: '10px', // Bordes redondeados
    padding: '15px', // Espaciado interno
    margin: '20px auto', // Centrado con margen
    color: '#333' // Color de texto
  };

  const buttonStyle = {
    backgroundColor: '#0056b3', // Color de fondo del botón
    borderColor: '#0056b3', // Color del borde del botón
    fontWeight: 'bold', // Fuente en negrita
    color: '#ffffff', // Color de texto del botón
    marginTop: '10px', // Margen superior
  };

  return (
    <>
      <Card style={cardStyle}>
        <Card.Body>
          <Card.Title>Tarea: Revisar y derivar solicitud de préstamo</Card.Title>
          <Card.Text><strong>Analista Comercial Encargado:</strong> {props.encargado}</Card.Text>
          <Card.Text><strong>ID Solicitud Préstamo:</strong> {props.idSolicitud}</Card.Text>
          <Card.Text><strong>Beneficiario:</strong> {props.beneficiario}</Card.Text>
          <Card.Text><strong>Monto:</strong> ${props.monto}</Card.Text>
          <Card.Text><strong>Fecha:</strong> {props.fecha}</Card.Text>
          <Card.Text><strong>Estado:</strong> {estadoSolicitud}</Card.Text>
          <Button style={buttonStyle} onClick={() => setEstadoSolicitud("Derivado")}>
            {estadoSolicitud === "Pendiente" ? "Derivar al supervisor" : "Derivado"}
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default SolicitudPrestamo;
