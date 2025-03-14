import { Delete } from '@mui/icons-material'
import './wishlist.css'
import { useDispatch, useSelector } from 'react-redux';
import { removeFavourite } from '../../redux/wishlistRedux';
import { Link } from 'react-router-dom';

const Wishlist = () => {
    const dispatch = useDispatch();
    const wishlist = useSelector((state) => state.clientWishlist);
    const user = useSelector((state) => state.client.currentUser);

    const handleRemove = (product) => {
        dispatch(
            removeFavourite(product)
        )
    }

  return (
    <div className="cart-container">
        {user
            ?
            <>
                <h1>MY WISHLIST</h1>
                <div className="cart-wrapper">
                    <div className="cart-left">
                        {wishlist.products.map((product) => (
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
                                <p>{wishlist.products.length}</p>
                            </div>
                            <div className="cart-right-item">
                                <p>Subtotal</p>
                                <p>Tsh. {wishlist.total}</p>
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
                                <p>Tsh. {wishlist.total}</p>
                            </div>
                            <div className="cart-button">
                                <button>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
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
                    <p>Register or Log In to view wishlist</p> 
                </div>
            </div>
        }
    </div>
  )
}

export default Wishlist