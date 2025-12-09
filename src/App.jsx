import React, { Suspense } from 'react'
import Navbar from './components/Navbar/Navbar'
import  TicketSystem from './Components/TicketSystem/TicketSystem'
import Footer from './components/Footer/Footer'
import { ToastContainer } from 'react-toastify'
import Loader from './components/Loader/Loader'

const ticketData = async () => {
  const res = await fetch('/ticketData.json')
  return res.json()
}

const tiketDataPromise = ticketData()

const App = () => {
  return (
    <>
    <ToastContainer /> 
      <Navbar />
      <Suspense fallback={<Loader />}>
      <TicketSystem tiketDataPromise={tiketDataPromise} />
      </Suspense>
      <Footer />
    </>
  )
}

export default App
