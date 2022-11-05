import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useForm } from '../../../../hook/useForm'

export const UpdateModal = ({showModal,handleCloseModal,id,capacity:stock,description:desc}) => {


    const [formValues, handleInputChange, reset] = useForm({
        id: id,
        capacity: stock,
        description: desc,
    });

    const { capacity, description } = formValues;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (capacity !== "" && description !== "") {
            await fetch(`https://taller-sprinboot.herokuapp.com/rooms/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id,
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
            
    }
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Actualizar datos de la  Sala</Modal.Title>
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
              <Form.Control as="textarea" rows={3} name="description" 
              value={description} 
              onChange={handleInputChange}
              />
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
