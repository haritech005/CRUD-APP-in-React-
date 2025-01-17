import Create from "./Create"
import Home from "./Home"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Update from "./Update"

function App() {


  return (
    <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/update/:id" element={<Update/>}/>
    </Routes>
  </BrowserRouter>
       
    </>
  )
}

export default App
