
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbare from './components/Navbare';
import Footere from './components/Footere';
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Registre from './pages/Registre';
import Login from './pages/Login';
import Formation from './pages/Formation';




function App() {
  return (
    <div className="App">
      <Navbare/>
      <Routes>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/registre" element={<Registre/>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/Formation" element={<Formation/>}></Route>
   </Routes>
      
    </div>
  );
}

export default App;
/*<Routes>
        <Route path='/' element={<Home/>}/>
        <Route path ='/Registre' element={<Registre/>}>Registre </Route>
        <Route path='/Login' element={<Login/>}/>
      </Routes>*/


