import React, {Fragment} from 'react'

import {Header} from '../Header'

import {BookList} from '../../pages/BookList'

import {Footer} from '../Footer'

export const Container = () => {
  return (
    <Fragment>
      <Header />

      <BookList />

      <Footer />
    </Fragment>
  )
}

//INDEX.JS
//Porque hay INDEX.js en todos mis modulos, es para que queden mas limpios todos los imports, ya que por default en react va directamente a buscar en la ruta q le especifico al index.js, sino tendria que poner import {Footer} from '../Footer/Footer'
//Ademas, si tengo mas componentes en esa carpeta, tmb los puedo llamar desde ese index.

//IMPORTS {}
//cuando el import lleva llaves? Si es un import DEFAULT, no lleva llaves, si lo creamos nosotros, lleva llave

//{Fragment}
//los componentes de react, siempre en return tiene q estar contenido dentro de <div> padre.
//si no quiero generar un div, a partir de react v.16 salio el fragment
//es un componente nuevo de react, nos permite evadir el componente padre <div>
//de esta manera dentro del fragment, pongo mis componentes. Este fragment no se renderiza como un div en html(dato)