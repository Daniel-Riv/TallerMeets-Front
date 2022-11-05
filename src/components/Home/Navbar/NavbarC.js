import React, { useState } from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { MeetModal } from '../../Meets/MeetModal';
import { RoomModal } from '../Rooms/Modal/RoomModal';

export const NavbarC = ({ action,isRoom = false, idRoom }) => {
  const [showModal, setShowModal] = useState(false);
  const [roomModal,setRoomModal] = useState([]);
  const [meetModal,setMeetModal] = useState([]);


  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
    <Container>
      <Navbar expand='lg' variant='light' bg='light'>
        <Container>
          <Button variant='dark' className='btn' onClick={handleShowModal} >
            {action}
          </Button>
        </Container>
      </Navbar>
    </Container>
    {
        isRoom ? <RoomModal showModal={showModal} handleCloseModal={handleCloseModal}  roomModal={roomModal}/> 
        :
        <MeetModal showModal={showModal} handleCloseModal={handleCloseModal} meetModal={meetModal} idRoom={idRoom}/>
    }
        
    </>
  );
};
