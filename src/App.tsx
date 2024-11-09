import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
// import './App.css'
import { AppRoutes } from './routes/routes'
import NavigationBar from './components/Drawer/Drawer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <BrowserRouter>
        <NavigationBar />
        <AppRoutes />
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
