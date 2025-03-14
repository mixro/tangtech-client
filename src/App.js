import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from './Components/layout/Layout';
import Services from './Pages/services/Services';
import Register from './Pages/register/Register';
import Home from './Pages/home/Home';
import Login from './Pages/login/Login.jsx';
import Customers from './Pages/customers/Customers.jsx';
import About from './Pages/about/About.jsx';
import Contact from './Pages/contact/Contact.jsx';
import Cart from './Pages/cart/Cart';
import Wishlist from './Pages/wishlist/Wishlist';
import Success from './Pages/success/Success';
import Products from './Pages/products/Products';
import Trainings from './Pages/trainings/Trainings';
import Service from './Pages/service/Service';
import Product from './Pages/product/Product';
import Partners from './Pages/partners/Partners';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Routes without Layout */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Routes with Layout */}
          <Route
            path="*"
            element={
              <Layout>
                <Routes>
                  <Route index element={<Home />} />
                  <Route path='/cart' element={<Cart />} />
                  <Route path='/wishlist' element={<Wishlist />} />
                  <Route path='/success' element={<Success />} />

                  <Route path='/services' element={<Services />} />
                  <Route path='/service/:id' element={<Service />} />

                  <Route path='/products' element={<Products />} />
                  <Route path="/product/:id" element={<Product />} />

                  <Route path='/trainings' element={<Trainings />} />

                  <Route path='/partners' element={<Partners />} />
                  <Route path='/customers' element={<Customers />} />
                  <Route path='/about-us' element={<About />} />
                  <Route path='/contact-us' element={<Contact />} />
                </Routes>
              </Layout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
