import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from './Components/layout/Layout';
import Services from './Pages/services/Services';
import Register from './Pages/register/Register';
import Home from './Pages/home/Home';
import Login from './Pages/login/Login.jsx';

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
                  <Route path='/services' element={<Services />} />
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
