import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NavbarC } from '../components/Home/Navbar/NavbarC';
import { Title } from '../components/Home/Title/Title';
import { ListCardMeets } from '../components/Meets/ListCardMeets';

export const MeetPage = () => {
    const {id} = useParams();
    const [meet,setMeet] = useState([]);
    

    const getMeet = async () => {
        const response = await fetch(`https://taller-sprinboot.herokuapp.com/rooms/${id}`);
        const data = await response.json();
        setMeet(data);
    }
  
    useEffect(() => {
        getMeet();
    }, []);


    if (meet.length === 0) {
        return <div>Loading...</div>
          
        
    }

   
  return (
    <>
    <NavbarC action="Crear Reunion" idRoom={id} />
    <Title title="Reuniones o Meets" />
    <ListCardMeets data={meet} />
    </>
  )
}
