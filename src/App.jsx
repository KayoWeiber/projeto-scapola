
import './App.css'
import Acesso from './Components/acesso'
import Login from './Components/login/login'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/acesso" element={<Acesso />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
