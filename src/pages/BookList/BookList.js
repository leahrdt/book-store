import React, { Fragment } from 'react'
import {BookCard} from '../../components/BookCard'
import {getBookList} from '../../api/books'

export class BookList extends React.PureComponent {

  constructor(props) { //constructor, el cual recibe como parametro los props. Y se ejecuta cuando se instancia la clase //Props, propiedades del componente, sin inmutables, no cambian.
  super(props); //constructor del padre, le paso los parametros que necesita.

    this.state = { 
      //STATE:estado del componente, le doy la estructura que yo quiero, los estados pueden cambiar.
      books: [],
      booksFiltered: [],
      filterValue: '',
      bookCart:[] }}

      componentDidMount() {
        const books = getBookList();
        this.setState({
          books: books
        })
      }

      addToCard = (book) => {
        this.setState((state) =>{
          return{
            bookCart:state.bookCart.concat(book) 
            // concat es para concatenar listas
          }
        })
      }

  render() { //render, es cuando se toma todo lo anterior y el componente se muestra en pantalla. Tiene q ser lo mas legible posible.

    const {books, bookCart} = this.state //eso es lo mismo que hacer esto: const books = this.state.books.

    return (
      <Fragment>
        {bookCart.length}
        { books.map(book => ( //Funcion .map me trnsforma la lista, en la vista que le estoy pasando.
            <BookCard
              //Props..... el 1er nombre lo creo.
              book={book}
              onAddCartHandler={this.addToCard}
              key={book.id} //siempre react te pide una key=id para su manejo interno.
            />
          )) }
      </Fragment>
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

//PureComponent con esto se gana performance, al actualizar el componente, si es "parecido" el cambio y no cree necesario, no se actualiza.