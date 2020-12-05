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
