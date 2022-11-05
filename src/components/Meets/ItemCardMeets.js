import { Button, Card } from 'react-bootstrap';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import { useEffect, useState } from 'react';
import { ActModal } from '../Acts/ActModal';
import Swal from 'sweetalert2';

export const ItemCardMeets = ({ id,affair, dataMeet }) => {
  const [showModal, setShowModal] = useState(false);
  const [act,setAct] = useState([]);

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const getAct = async () => {
    const response = await fetch(`https://taller-sprinboot.herokuapp.com/acts/${id}`);
    const data = await response.json();
    setAct(data);
    console.log(data);
 }
 useEffect(() => {
    getAct();
 },[]);



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
        const response = await fetch(`https://taller-sprinboot.herokuapp.com/meets/${id}`, {
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
      <Card style={{ width: '20rem' }}>
        <Card.Body>
          <Card.Title>Asunto</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>{affair}</Card.Subtitle>
          <Card.Text>
            Fecha: {dayjs(dataMeet).format('YYYY-MM-DD HH:mm')}
          </Card.Text>
          <Button variant='info  btn-info ' className='btn  px-3 m-1 ' onClick={handleShowModal} >Acta</Button>
        </Card.Body>
        <Card.Footer>
            <small className='text-muted'>Gestion de reuniones</small>
            <br/>
            <Button variant='primary ' className='btn m-1' >Actualizar</Button>
            <Button variant='danger ' className='btn m-1' onClick={handleDelete}>Eliminar</Button>
        </Card.Footer>
      </Card>
      <ActModal showModal={showModal} handleCloseModal={handleCloseModal}  act={act}/>
    </>
  );
};
