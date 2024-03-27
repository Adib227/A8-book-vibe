import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Listedbook from './Pages/Listedbook.jsx'
import Pagetoread from './Pages/Pagetoread.jsx'
import NavBar from './Components/NavBar.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBar />
  },
  {
    path: '/listedbook',
    element: <Listedbook />
  },
  {
    path: '/pagetoread',
    element: <Pagetoread />
  }
]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
    {/* <App /> */}
  </>,
)
