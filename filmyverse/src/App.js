import './App.css';
import Header from './Components/Header';
import Cards from './Components/Cards';
import {Route, Routes} from 'react-router-dom'
import AddMovie from './Components/AddMovie';
import Detail from './Components/Detail';
import {createContext, useContext, useEffect, useState} from 'react'
import Login from './Components/Login';
import Signup from './Components/Signup';


const Appstate = createContext();

function App() {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");

  

  return (
    <Appstate.Provider value={{login, userName, setLogin, setUserName}}>
    <div className="App relative">
     <Header />
     <Routes>
     <Route path="/" element={<Cards />} />
     <Route path="/addmovie" element={<AddMovie />} />
     <Route path="/detail/:id" element={<Detail />} />
     <Route path="/login" element={<Login />} />
     <Route path="/signup" element={<Signup />} />
     </Routes>
    </div>
    </Appstate.Provider>
  );
}

export default App;
export {Appstate};
