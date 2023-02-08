import './App.css';
import Header from './Components/Header';
import Cards from './Components/Cards';
import {Route, Routes} from 'react-router-dom'
import AddMovie from './Components/AddMovie';
import Detail from './Components/Detail';


function App() {
  return (
    <div className="App relative">
     <Header />
     <Routes>
     <Route path="/" element={<Cards />} />
     <Route path="/addmovie" element={<AddMovie />} />
     <Route path="/detail/:id" element={<Detail />} />
     </Routes>
    
    </div>
  );
}

export default App;
