import { useState } from "react";
import { Button, Modal } from "react-bootstrap"

export const ActModal = ({showModal,handleCloseModal,act}) => {

return (
    <Modal show={showModal} onHide={handleCloseModal}>
    <Modal.Header closeButton>
      <Modal.Title>Acta de la reunion</Modal.Title>
    </Modal.Header>
    <Modal.Body>{act.description}</Modal.Body>
    <Modal.Footer>
      <Button variant='primary ' className='btn m-1' >Actualizar</Button>
      <Button variant='danger ' className='btn m-1' >Eliminar</Button>
      <Button variant="secondary" onClick={handleCloseModal}>
        Close
      </Button>
      <Button variant="primary" onClick={handleCloseModal}>
        Guardar
      </Button>
    </Modal.Footer>
  </Modal>
  )
}
