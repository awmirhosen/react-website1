import './App.css';
import Navbar from './components/navbar/Navbar'
import {BrowserRouter, Router, Routes , Route} from "react-router-dom";

function App() {
  return (
    <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Navbar />} />
        </Routes>
        </BrowserRouter>
   </>
  );
}

export default App;
