
import './App.css';
import Home from './pages/Home';
import { useGlobalContext } from './context';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import About from './pages/About'
import Cart from './pages/Cart';
import Footer from './components/Footer';
import SingleItem from './pages/SingleItem'
  function App() {
  return (
    <BrowserRouter>
      <Navbar />
     <Sidebar></Sidebar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path ="/cart" element = {<Cart></Cart>}></Route>
        <Route path ="/item/:id" element = {<SingleItem></SingleItem>}/>
        {/* <Route path='*' element={<Error />} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
