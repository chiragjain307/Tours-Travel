import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Outlet } from 'react-router-dom'

function App() {


  return (
    <>
      <div>
        <header>
          <Navbar />
        </header>
        
        <main>
          <Outlet/>
        </main>
        
        <footer>

        </footer>
      </div>

    </>
  )
}

export default App
