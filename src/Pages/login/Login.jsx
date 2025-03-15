import './login.css'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { SignIn } from '../../redux/apiCalls';
import { CircularProgress } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logginButtonClicked, setLogginButtonClicked] = useState(false);
  const navigate = useNavigate();
  const { isFetching, error } = useSelector((state) => state.client);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    setLogginButtonClicked(true); // Set the state to true when the button is clicked
    SignIn(dispatch, { email, password }, navigate);
}

  return (
    <div className="registerContainer">
      <div className="registerTop">
        <div className="registerTop-image">
          <Link to='/' className='link-main'>
            <img src="/assets/tangtech-logo.png" alt="LOGO" />
          </Link>
        </div>
      </div>

      <div className="registerBody">
        <div className="registerBody-container">
          <h2>Login</h2>
          <div className="registerItems">
            <div className="registerBody_item">
              <h3>Email</h3>
              <input 
                type="text"
                className='register-input' 
                placeholder='eg; johndoe@gmail.com'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="registerBody_item">
              <h3>Password</h3>
              <input 
                type="password"
                className='register-input' 
                placeholder='Enter password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="registerButton loginButton">
            <div onClick={handleClick} className='register-button'>
              {logginButtonClicked && isFetching ? <CircularProgress size={30} /> : <p>LOGIN</p>}
            </div>
            {logginButtonClicked && error && !isFetching && // Display error only after button click
              <div className="error">
                <p>Wrong credentials!!, Try again !!</p>
              </div>
            }
          </div>

          <div className="registerNow">
            <p>Don't have an account?</p>
            <Link to="/register" className='link-main'>
              <button>Register Now</button>
            </Link>
          </div>
        </div>
        <div className="registerImage">
          <img src='/assets/electrical.jpg' alt='TANG TECH LOGO' />
          <div className="register-logoImg">
            <img src="/assets/tangtech-logo.png" alt="LOGO" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login