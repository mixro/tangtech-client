import { useLocation, useNavigate } from 'react-router-dom';
import './product.css'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addProducts } from '../../redux/cartRedux';
import { addFavourite } from '../../redux/wishlistRedux';
import { Check } from '@mui/icons-material';

const Product = () => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    const user = useSelector((state) => state.client.currentUser);
    const product = useSelector((state) => state.clientProducts.products.find((product) => product._id === productId));

    const handleCart = () => {
        user 
        ?
            dispatch(addProducts({...product, quantity}))
        :
            navigate('/login');
    }

    const handleWishlist = () => {
        user 
        ?
            dispatch(addFavourite({...product, quantity}))
        :
            navigate('/login');
    }

  return (
    <div className="product-container">
        <div className="product-wrapper">
            <div className="product-top">
                <div className="product-left">
                    <img src={product.img} alt={product.title} />
                </div>

                <div className="product-right">
                    <h2>{product.title}</h2>
                    <p className="product-brand">{product.brand}</p>

                    <div className="product-price">
                        <p>Price:</p>
                        <p>Tsh. {product.price}</p>
                    </div>

                    <div className="product-quantity">
                        <p>Quantity:</p>
                        <input type="number" defaultValue={"1"} onChange={(e) => setQuantity(e.target.value)} />
                    </div>

                    <div className="product-buttons">
                        <button onClick={() => handleCart()}>Add to Cart</button>
                        <button onClick={() => handleWishlist()}>Add to Wishlist</button>
                    </div>

                    <div className="product-shipping">
                        <Check />
                        <p>Get FREE Shipping.Confirmed orders might take 1-2 days for processing</p>
                    </div>
                </div>
            </div>

            <div className="product-bottom">
                <h2>Description</h2>
                <p>{product.desc}</p>
            </div>
        </div>
    </div>
  )
}

export default Product