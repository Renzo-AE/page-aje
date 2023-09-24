import { Header } from './components/Header/Index'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Index'
import { AjeEnElMundo } from './pages/AjeEnElMundo/Index'
import { NuestraHistoria } from './pages/NuestraHistoria/Index'
import { TrabajarEnAje } from './pages/TrabajarEnAje/Index'
import { NoticiasAje } from './pages/NoticiasAje/Index'

function App() {
  return (
    <div style={{overflow:"hidden"}}>
      <Header />
      <Routes>
        <Route path='/' element={<Home pageSelect="home" />} />
        
        <Route path='/aje-en-el-mundo' element={<AjeEnElMundo pageSelect="enelmundo" />} />
        <Route path='/nuestra-historia' element={<NuestraHistoria pageSelect="historia" />} />
        <Route path='/trabajar-en-aje' element={<TrabajarEnAje pageSelect="trabajaconaje" />} />
        <Route path='/noticias-aje' element={<NoticiasAje pageSelect="noticias" />} />
      </Routes>
    </div>
  )
}



export default App
