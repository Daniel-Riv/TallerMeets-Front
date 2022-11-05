import React, { useEffect, useState } from 'react';
import { NavItem } from 'react-bootstrap';
import { ItemCard } from './ItemCard';
import './itemCard.css';


export const ListCard = () => {
  const [rooms, setRooms] = useState();

  useEffect(() => {
    const getRooms = async () => {
        try {
            const response = await fetch('https://taller-sprinboot.herokuapp.com/rooms');
            const data = await response.json();
           // console.log(data);
            const {id,capacity,description} = data;
            setRooms(data);
          } catch (error) {
            console.log(error);
          }
    };
    getRooms();
  }, []);

  return (
    <div className="cards">
    {
        rooms?.map((room) => (
            <ItemCard key={room.id} id={room.id} capacity={room.capacity} description={room.description} meets={room.meets}/>
        ))
    }
    </div>
  )
};
