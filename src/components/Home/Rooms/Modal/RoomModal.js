import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { v4 } from 'uuid';
import { useForm } from '../../../../hook/useForm';

export const RoomModal = ({showModal,handleCloseModal}) => {

    const [formValues, handleInputChange, reset] = useForm({
        capacity: '',
        description: '',
    });

    const { capacity, description } = formValues;

    const handleSubmit = async(e) => {
        e.preventDefault();
        await fetch('https://taller-sprinboot.herokuapp.com/rooms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                capacity: capacity,
                description: description,
            })
        }).then(res => res.json())
        .then(data => {
            handleCloseModal();
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
        )
    }

    

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Sala</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Capacidad de la sala</Form.Label>
              <Form.Control
                type="number"
                placeholder="0000"
                name="capacity"
                value={capacity}
                onChange={handleInputChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descripcion de la sala</Form.Label>
              <Form.Control as="textarea" rows={3} name="description" value={description} onChange={handleInputChange}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
          Guardar
          </Button>
        </Modal.Footer>
      </Modal>
  )
}
