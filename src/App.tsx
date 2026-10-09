import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import Home from './pages/Home'

// Route-level code splitting: each page ships only when visited.
const Services = lazy(() => import('./pages/Services'))
const Service = lazy(() => import('./pages/Service'))
const Products = lazy(() => import('./pages/Products'))
const Product = lazy(() => import('./pages/Product'))
const Trainings = lazy(() => import('./pages/Trainings'))
const Partners = lazy(() => import('./pages/Partners'))
const Customers = lazy(() => import('./pages/Customers'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Cart = lazy(() => import('./pages/Cart'))
const Wishlist = lazy(() => import('./pages/Wishlist'))
const Success = lazy(() => import('./pages/Success'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="service/:id" element={<Service />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="trainings" element={<Trainings />} />
        <Route path="partners" element={<Partners />} />
        <Route path="customers" element={<Customers />} />
        <Route path="about-us" element={<About />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
