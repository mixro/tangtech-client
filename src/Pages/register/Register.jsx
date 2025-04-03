import './register.css'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { SignUp } from '../../redux/apiCalls';
import CircularProgress from '@mui/material/CircularProgress';

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verifiedPassword, setVerifiedPassword] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  // Add state to track input validity
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [verifiedPasswordValid, setVerifiedPasswordValid] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isFetching } = useSelector((state) => state.client);

  const handleClick = (e) =>  {
    e.preventDefault();

    // Validate input fields
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Basic email validation
    const isPasswordValid = password.length >= 6; // Add your password validation logic
    const isVerifiedPasswordValid = password === verifiedPassword;

    // Update input validity state
    setEmailValid(isEmailValid);
    setPasswordValid(isPasswordValid);
    setVerifiedPasswordValid(isVerifiedPasswordValid);

    // Check if all input fields are valid before proceeding
    if (isEmailValid && isPasswordValid && isVerifiedPasswordValid) {
        setButtonClicked(true);
        SignUp(dispatch, { username, password, email }, navigate);
    }
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
          <h2>register</h2>
          <div className="registerItems">
            <div className="registerBody_item">
              <h3>Username</h3>
              <input 
                type="text"
                className='register-input' 
                placeholder='Username'
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="registerBody_item">
              <h3>Email</h3>
              <input 
                type="text"
                className='register-input' 
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
              />
              {!emailValid && <p className="error">Invalid email format.</p>}
            </div>
            <div className="registerBody_item">
              <h3>Password</h3>
              <input 
                type="password"
                className='register-input' 
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
              {!passwordValid && <p className="error">Password is too short, minimum characters should be 6.</p>}
            </div>
            <div className="registerBody_item">
              <h3>Verify password</h3>
              <input 
                type="password"
                className='register-input' 
                placeholder='Verify password'
                onChange={(e) => setVerifiedPassword(e.target.value)}
              />
              {!verifiedPasswordValid && <p className="error">Passwords do not match.</p>}
            </div>
          </div>
          <div className="registerButton">
            <div onClick={handleClick} className='register-button'>
              {buttonClicked && isFetching && !error ? <CircularProgress size={30} /> : <p>REGISTER</p>}
            </div>
            {buttonClicked && error && !isFetching && 
              <div className="error">
                <p>Error while registering, Try again !!</p>
              </div>
            }
          </div>
          <div className="registerText">
            <p>Already a member?
                <Link to="/login" className='link-main'>
                  <span> Login</span>
                </Link>
            </p>
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

export default Register