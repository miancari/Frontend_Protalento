import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function GastoForm() {
    const [gasto, setGasto] = useState({
        usuarioid: '',
        categoria_id: '',
        monto: '',
        descripcion: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setGasto({ ...gasto, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Realizar la solicitud HTTP para registrar el gasto en la base de datos
        try {
            const response = await fetch('http://localhost:5000/gastos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(gasto)
            });

            if (response.ok) {
                alert('Datos ingrsados correctamente')
            } else {
                alert('verifique sus datos ingrsados')
            }
        } catch (error) {
            alert('Credenciales inválidas')
        }
    };

    return (
        <div className='container'>
            <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="usuarioid">
                    <Form.Label>Usuario ID</Form.Label>
                    <Form.Control
                        type="text"
                        name="usuarioid"
                        value={gasto.usuarioid}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="categoria_id">
                    <Form.Label>Categoría ID</Form.Label>
                    <Form.Control
                        type="text"
                        name="categoria_id"
                        value={gasto.categoria_id}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="monto">
                    <Form.Label>Monto</Form.Label>
                    <Form.Control
                        type="number"
                        name="monto"
                        value={gasto.monto}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control
                        type="text"
                        name="descripcion"
                        value={gasto.descripcion}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
            </Row>
            <Button type="submit">Registrar Gasto</Button>
        </Form>
        </div>
    );
}

