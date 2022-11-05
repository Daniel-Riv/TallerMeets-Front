import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useForm } from '../../hook/useForm';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export const MeetModal = ({showModal,handleCloseModal, idRoom}) => {


  const [formValues, handleInputChange, reset] = useForm({
    affair: '',
    dateMeet: new Date().toISOString(),
});

const { affair, dateMeet } = formValues;

const [state,setState] = useState(new Date());

const handleSubmit = async(e) => {
    e.preventDefault();

      await fetch('https://taller-sprinboot.herokuapp.com/meets', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          affair: affair,
          "date_meet": state.toISOString(),
          "room_id": idRoom,
        })
        }).then(res => res.json())
        .then(data => {
          console.log(data);
            handleCloseModal();
            /* setTimeout(() => {
                window.location.reload();
            }, 1000); */
        }
        )
      console.log(state.toISOString());
    }



  return (
    <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Reunion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Asunto de la Reunion</Form.Label>
              <Form.Control
                type="text"
                placeholder="0000"
                name="affair"
                value={affair}
                onChange={handleInputChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Fecha de la Reunion</Form.Label>
              <DatePicker selected={state} onChange={(date)=> setState(date)}  />
              
              
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
