import Navbar from './components/Header/Navbar'
import {Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

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
          {/* <Footer/> */}
        </footer>
      </div>

    </>
  )
}

export default App
