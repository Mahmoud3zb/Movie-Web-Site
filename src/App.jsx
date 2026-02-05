import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import router from './routes'
import { RouterProvider } from 'react-router-dom'
import store  from './store/store'
import { Provider } from 'react-redux'
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App