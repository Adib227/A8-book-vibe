import './App.css'
import NavBar from './Components/NavBar'
import Ebook from './Pages/Ebook'
import Home from './Pages/Home'
import Islamicbook from './Pages/Islamicbook'
import Listedbook from './Pages/Listedbook'
import Pagetoread from './Pages/Pagetoread'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
      <Listedbook></Listedbook>
      <Pagetoread></Pagetoread>
      <Islamicbook></Islamicbook>
      <Ebook></Ebook>
    </>
  )
}

export default App
