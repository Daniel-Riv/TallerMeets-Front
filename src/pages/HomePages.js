import React from 'react'
import { NavbarC } from '../components/Home/Navbar/NavbarC'
import { ListCard } from '../components/Home/Rooms/Card/ListCard'
import { Title } from '../components/Home/Title/Title'

export const HomePages = () => {
  return (
    <>
    <NavbarC action="Crear Sala" isRoom/>
    <Title title="Salas o Rooms" />
    <ListCard />
    </>
  )
}
