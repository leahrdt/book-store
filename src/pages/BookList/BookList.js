import React from 'react'
import {BookCard} from '../../components/BookCard'
import {getBookList} from '../../api/books'

export class BookList extends React.Component {
  constructor(props) { //constructor, el cual recibe como parametro los props. Y se ejecuta cuando se instancia la clase //Props, propiedades del componente, sin inmutables, no cambian.
    super(props); //constructor del padre, le paso los parametros que necesita.

    this.state = { 
      //STATE:estado del componente, le doy la estructura que yo quiero, los estados pueden cambiar.
      books: [],
      booksFiltered: [],
      filterValue: '', }}

  render() { //render, es cuando se toma todo lo anterior y el componente se muestra en pantalla.

    const books = getBookList();

    return (
      <div>
        { books.map(book => ( //Funcion .map me trnsforma la lista, en la vista que le estoy pasando.
            <BookCard
              //Props..... el 1er nombre lo creo.
              book={book}
              key={book.id} //siempre react te pide una key=id para su manejo interno.
            />
          )) }
      </div>
    )
  }
}


//Componente Class Tipo:

// export class BookList extends React.Component {
//   render() { 
//     return (
//       <div>
//       </div>
//     )
//   }
// }