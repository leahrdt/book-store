  
import React from 'react'

export const BookCard = (props) => { 
  return (
    <div>
      BookCard {props.book.title}   
      <button onClick={() => props.onAddCartHandler(props.book)}>Agregar al carrito</button>
    </div>
  )
}

//componente tipo FUNCION, los tipo funcion carecen de state y de elementos de ciclo de vida, son mas basicos.
//Props: propiedades del componente, atributos de configuracion del componente.
//Configuracion de las props: una ves que las creamos en el booklist, tengo que configurar el Componente BookCard para que las lea.
//Estas vienen por parametro, por convencion le ponemos al parametro: Props (le puedo poner cualquier nombre); Props.book (book se llama la prop que creamos, tmb puede ir cualquiera); props.book.title (title es parte de la api).

//TAMBIEN ES VALIDO EN ESTE CASO POER ASI...
// export const BookCard = ({book, onAddCartHandler}) => { 
//   return (
//     <div>
//       BookCard {book.title}  
//       <button onClick={() => onAddCartHandler(book)}>Agregar al carrito</button> onAddCartHandler(book) ENTRE PARENTESIS ESTA BOOK PARA QUE SEPA A QUE LIBRO LE HACEMOS CLICK
//     </div>
//   )
// }