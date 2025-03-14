import { Call, Close, Delete, Email, Person2, Room } from '@mui/icons-material'
import './cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeProduct } from '../../redux/cartRedux';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '340px',
    width: '90%',
    bgcolor: 'background.paper',
    border: '2px solid gray',
    boxShadow: 24,
    borderRadius: '10px',
    outline: "none",
};

const Cart = () => {
    const [open, setOpen] = useState(false);
    const [elements, setElements] = useState({});
    const [ordered, setOrdered] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector((state) => state.clientCart);
    const user = useSelector((state) => state.client.currentUser);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleRemove = (product) => {
        dispatch(
            removeProduct(product)
        )
    }

    const handleChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setElements({
          ...elements, [e.target.name]: value,
        })
    }

    useEffect(() => {
        const makeRequest = async () => {
          try {
            navigate("/success", {state:{
              elements: elements,
              products: cart,
            }});
          } catch(err) {
            console.log(err)
          }
        };
        cart.total > 0 && ordered && makeRequest();
    }, [navigate, cart, ordered, elements])

  return (
    <div className="cart-container">
        {user 
            ?
            <>
                <h1>MY CART</h1>
                <div className="cart-wrapper">
                    <div className="cart-left">
                        {cart.products.map((product) => (
                            <div className="cart-item" key={product._id}>
                                <div className="cart-item-left">
                                    <div className="cart-product-image">
                                        <img src={product.img} alt='CB' />
                                    </div>
                                </div>
                                <div className="cart-item-right">
                                    <p><span>Product:</span> {product.title}</p>
                                    <p><span>Brand:</span> {product.brand}</p>
                                    <p><span>Category:</span> {product.type}</p>
                                    <h2>Tsh. {product.price}</h2>
                                    <p><span>Quantity:</span> {product.quantity}</p>                        
                                    <div className="cart-delete-button">
                                        <Delete onClick={() => handleRemove(product)} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-right">
                        <div className="cart-right-container">
                            <h3>ORDER SUMMARY</h3>
                            <div className="cart-right-item">
                                <p>Total products</p>
                                <p>{cart.quantity}</p>
                            </div>
                            <div className="cart-right-item">
                                <p>Subtotal</p>
                                <p>Tsh. {cart.total}</p>
                            </div>
                            <div className="cart-right-item">
                                <p>Estimated shipping</p>
                                <p>free</p>
                            </div>
                            <div className="cart-right-item">
                                <p>Estimated tax</p>
                                <p>free</p>
                            </div>
                            <div className="cart-right-item">
                                <p>Total</p>
                                <p>Tsh. {cart.total}</p>
                            </div>
                            <div className="cart-button">
                                <button onClick={handleOpen}>CHECKOUT NOW</button>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal
                    open={open}
                    //onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div className="modal_header">
                            <div className="modal_image">
                                <img src="/assets/tangtech-logo.png" alt="" />
                            </div>
                            <div className="modal_desc">
                            <div className="modal_title">
                                <p><b>Tang Tech Shop</b></p>
                            </div>
                                <p>Your total is Tsh. {cart.total || "0"}</p>
                            </div>
                            <div className="modal_close">
                                <Close onClick={handleClose} />
                            </div>
                        </div>
                        <div className="modal_body">
                            <div className="modal_input">
                                <div className="modal_input_icon">
                                    <Call />
                                </div>
                                <input type='tel' name='phoneNumber' onChange={handleChange} placeholder='+255 12345677' required={true} />
                            </div>

                            <div className="modal_info">
                                <p>User Infos</p>
                                </div>
                                <div className="modal_input special_input">
                                <div className="modal_input_icon">
                                    <Person2 />
                                </div>
                                <input type='text' name='name' onChange={handleChange} placeholder='John Doe' required={true} />
                            </div>
                            <div className="modal_input special_input">
                                <div className="modal_input_icon">
                                    <Email />
                                </div>
                                <input type='email' name='email' onChange={handleChange} placeholder='johndoe@gmail.com' required={true} />
                                </div>
                                <div className="modal_input special_input">
                                <div className="modal_input_icon">
                                    <Room />
                                </div>
                                <input type='text' name='address' onChange={handleChange} placeholder='ubungo, Dar es salaam' required={true} />
                            </div>
                            {cart.total <= 0 &&
                                <div className="cart_error">
                                    <p>total can't be zero(0)</p>
                                </div>
                            }

                            <div className="modal_submit">
                                <button type='submit' onClick={() => setOrdered(true)}>SUBMIT</button>
                            </div>
                        </div>
                    </Box>
                </Modal>
            </>
            :
            <div className="noUser">
                <div className="noUserButtons">
                    <div className="noUserButton">
                        <Link to="/login" className='link-main'>
                            <button>Login</button>
                        </Link>
                    </div>
                    <div className="noUserButton">
                        <Link to="/register" className='link-main'>
                            <button>Register</button>
                        </Link>
                    </div>
                </div>
                <div className="loginText">
                    <p>Register or Log In to view cart</p> 
                </div>
            </div>
        }
    </div>
  )
}

export default Cart