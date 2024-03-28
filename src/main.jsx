import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Listedbook from './Pages/Listedbook.jsx'
import Pagetoread from './Pages/Pagetoread.jsx'
import MainLayouts from './Layouts/MainLayouts.jsx'
import Islamicbook from './Pages/Islamicbook.jsx'
import Ebook from './Pages/Ebook.jsx'
import BookDetails from './Pages/BookDetails.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,

    children: [
      {
        path: '/',
        element: <Home />,
        loader:() => fetch('/api.json'),
      },
      {
        path: '/bookdetails/:id',
        element: <BookDetails />,
        loader:() => fetch('/api.json'),
      },
      {
        path: '/listedbook',
        element: <Listedbook />,
      },
      {
        path: '/pagetoread',
        element: <Pagetoread />,
      },
      {
        path: '/islamicbook',
        element: <Islamicbook />,
      },
      {
        path: '/ebook',
        element: <Ebook />,
      },
    ],
  },
 ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
    {/* <App /> */}
  </>,
)
