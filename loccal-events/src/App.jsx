
import { BrowserRouter, Route, Routes } from 'react-router'
import Explore from './pages/Explore'
import Event from './pages/Event'

function App() {

  return (
    <>
      <BrowserRouter>
        <main className='flex'>
          <Routes>
            <Route path='/' element={<Explore/>}/>
            <Route path='/event/:eventID' element={<Event/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
