import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './itemCard.css';
import { UpdateModal } from './UpdateModal';


export const ItemCard = ({ id, capacity, description }) => {

    const [showModal, setShowModal] = useState(false);
    const [updateModal,setUpdateModal] = useState([]);

    const navigate = useNavigate();

    const handleShowModal = () => {
        setShowModal(true);
      };
      const handleCloseModal = () => {
        setShowModal(false);
      };

    const handleOnclik = async () => {
        navigate(`/meet/${id}`);
    }

    const handleDelete = async () => {
        Swal.fire({
            title: '¿Estas seguro?',
            text: "No podras revertir esta accion!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar!'
        }).then(async (result) => {
            const response = await fetch(`https://taller-sprinboot.herokuapp.com/rooms/${id}`, {
                method: 'DELETE',
            });
            const data = await response.json();
            Swal.fire(
                'Borrado!',
                'Tu archivo ha sido borrado.',
                'success'
            )
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        })
        
    }

    
  return (
    <>
    <Card className='card'>
        <Card.Title className='card-title'>Sala: {id}</Card.Title>
      <Card.Body>
        <Card.Title className='card-title'>Capacidad:{capacity}</Card.Title>
        <Card.Text className='card-desc'>{description}</Card.Text>
      </Card.Body>
      <Card.Footer bsPrefix='footer'>
        <Button variant='info  btn-info ' className='btn mx-3 px-3 m-1 ' onClick={handleOnclik}>Ver</Button>
        <Button variant='primary ' className='btn m-1' onClick={handleShowModal}>Actualizar</Button>
        <Button variant='danger ' className='btn m-1' onClick={handleDelete}>Eliminar</Button>
        </Card.Footer>
    </Card>
        <UpdateModal showModal={showModal} handleCloseModal={handleCloseModal} updateModal={updateModal} id={id} capacity={capacity} description={description}/>
    </>
  );
};
