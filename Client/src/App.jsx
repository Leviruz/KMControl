import Header from "./components/header"
import Nav from "./components/nav"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomeCadastro from "./pages/HomeCadastro"
import Footer from "./components/footr"
import Home from "./pages/HomePage"


function App() {


  return (
    <>
    
      <BrowserRouter>
      <Header/>
      <Nav/>  
        <Routes>
          <Route path="/" element={<Home/>}  />
          <Route path="/cadastro" element={<HomeCadastro/>} />
          <Route path ="/cadastroVeículo"element={""} />
        </Routes>
      <Footer/>
      </BrowserRouter>

    </>
  )
}

export default App
