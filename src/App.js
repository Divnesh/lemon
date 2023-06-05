import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs'
import Home from './pages/Home'
import Book from './pages/Book';
import Menu from './pages/Menu';
import OrderOnline from './pages/OrderOnline';
import { AlertProvider } from './context/alertContext';
// import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <body>
      <AlertProvider>
        <Router>
          <Header></Header>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/menu' element={<Menu/>}/>
              <Route path='/reservations' element={<Book/>} />
              <Route path='/order' element={<OrderOnline/>}/>
              <Route path='/contact' element={<ContactUs/>}/>
          </Routes>
          <Footer></Footer>
        </Router>
      </AlertProvider>
    </body>
  );
}

export default App;
