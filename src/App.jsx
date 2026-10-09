import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";

// Home is in the main bundle; every other page loads on demand.
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services").then((m) => ({ default: m.Services })));
const ServiceDetail = lazy(() => import("./pages/Services").then((m) => ({ default: m.ServiceDetail })));
const Projects = lazy(() => import("./pages/Projects"));
const Products = lazy(() => import("./pages/Products").then((m) => ({ default: m.Products })));
const ProductDetail = lazy(() => import("./pages/Products").then((m) => ({ default: m.ProductDetail })));
const Trainings = lazy(() => import("./pages/Trainings"));
const Partners = lazy(() => import("./pages/Partners"));
const Contact = lazy(() => import("./pages/Contact"));
const ImageCredits = lazy(() => import("./pages/ImageCredits"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<div className="page-loading" aria-busy="true" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/trainings" element={<Trainings />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/image-credits" element={<ImageCredits />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
