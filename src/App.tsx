import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { AppRoutes } from './routes/routes'
import AnchorTemporaryDrawer from './components/Drawer/Drawer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <BrowserRouter>
        {/* <AppRoutes /> */}
        <AnchorTemporaryDrawer />
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
