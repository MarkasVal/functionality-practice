import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/home';
import Book from './Pages/book';
import Destinations from './Pages/destinations';
import Holidays from './Pages/holidays';
import ErrorPage from './Pages/errorpage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element ={<Home/>}/>
          <Route path = "/home" element={<Home/>}/>
          <Route path = "/holidays" element ={<Holidays/>}/>
          <Route path = "/destinations" element ={<Destinations/>}/>
          <Route path = "/book" element ={<Book/>}/>
          <Route path ="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
