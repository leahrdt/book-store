import React, { Fragment } from 'react'
import {BookCard} from '../../components/BookCard'
import {getBookList} from '../../api/books'

export class BookList extends React.PureComponent {

  constructor(props) { //constructor, el cual recibe como parametro los props. Y se ejecuta cuando se instancia la clase //Props, propiedades del componente, sin inmutables, no cambian.
  super(props); //constructor del padre, le paso los parametros que necesita.

    //STATE:estado de los componente, los estados pueden cambiar.
    this.state = { 
      books:[],
      bookCart:[],
      booksFiltered: [],
      filterValue: '',
      }}

      //Aca va mi API donde tengo la info, y seteo el state.
      componentDidMount() {
        const booksa = getBookList();
        this.setState({
          books: booksa
        })
      }

      //Funciones

      //La idea es ir creando una lista en bookCart del state con el libro que le hago click
      addToCard = (bookk) => { //Funcion para setear mi state, bookk es mi parametro, que es el props.book que llamo en BookCard.js
        this.setState((state) =>{ //Funcion que me devuelve una lista, le pongo "state", q es el "actual" de parametro
          return{
            bookCart: state.bookCart.concat(bookk) //Creo una nueva lista con lo que ya tengo, y el concat es para concatenar cada valor a la lista que voy creando.
          }
        })
      }

  render() { //render, es cuando se toma todo lo anterior y reedibuja en pantalla lo que esta abajo.

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