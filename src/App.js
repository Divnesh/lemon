import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs'
import Home from './pages/Home'
import Book from './pages/Book';
import Menu from './pages/Menu';
import OrderOnline from './pages/OrderOnline';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <body>
      <Router>
        <Header></Header>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/reservations' element={<Book/>} />
            <Route path='/order' element={<OrderOnline/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
        </Routes>
        {/* <LandingSection></LandingSection> */}
        {/* <LandingPage></LandingPage> */}
        {/* <Reservations></Reservations> */}
        {/* <Testimonials></Testimonials> */}
        {/* <ContactUs></ContactUs> */}
        <Footer></Footer>
      </Router>
    </body>
  );
}

export default App;
