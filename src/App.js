import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Aboutus from './pages/Aboutus';
import Industry from './pages/Industry';
import Error from './pages/Error';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
        <Header />
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />  
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/industry" element={<Industry />} />
            <Route path="/*" element={<Error />} />


           
          </Routes>

        </div>
        <Footer />
      </Router>
    </div>
  );
}
export default App; 