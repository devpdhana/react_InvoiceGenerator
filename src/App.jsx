import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'
import InvoiceForm from './components/InvoiceForm'

import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import './App.css'

function App() {

  return (
    <div className='d-flex flex-column align-items-center justify-content-center w-100'>
      <Container >
        <InvoiceForm />
      </Container>
    </div>
  )
}

export default App
