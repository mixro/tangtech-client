import { useDispatch, useSelector } from 'react-redux';
import './success.css'
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { userRequest } from '../../requestMethod';
import { clearCart } from '../../redux/cartRedux';
import { CircularProgress } from '@mui/material';

const Success = () => {
    const location = useLocation();
    const elements = location.state?.elements;
    const cart = location.state?.products;
    const currentUser = useSelector((state) => state.client.currentUser);
    const user = useSelector((state) => state.client.currentUser);
    const [order, setOrder] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        const createOrder = async () => {
          try {
            const res = await userRequest.post("/orders", {
              userId: currentUser._id,
              products: cart.products.map((item) => ({
                productId: item._id,
                title: item.title,
                desc: item.desc,
                price: item.price,
                brand: item.brand,
                type: item.type,
                status: item.status,
                quantity: item.quantity,
                inStock: item.inStock,
                img: item.img,
              })),
              amount: cart.total,
              email: elements.email,
              address: elements.address,
              name: elements.name,
              phoneNumber: elements.phoneNumber,
            })
            setOrder(res.data);
            dispatch(clearCart());
          } catch(err) {
            console.log(err);
          }
        }
        elements && createOrder();
    }, [cart, elements, currentUser, dispatch]);

  return (
    <div className="success-container">
        {user
            ? 
            <div className="success_wrapper">            
                {order._id
                    ?
                    <>
                        <div className="orderContainer">
                            <div className="order_header">
                                <h2>ORDER DETAILS</h2>
                            </div>
                            <div className="orderWrapper">
                                <div className="orderWrapper_headerr">
                                    <p>ORDER DETAILS</p>
                                </div>
                                <div className="orderItems">
                                    <div className="orderItem">
                                        <p>User Name</p>
                                        <p>{order.name}</p>
                                    </div>
                                    <div className="orderItem">
                                        <p>Email</p>
                                        <p>{order.email}</p>
                                    </div>
                                    <div className="orderItem">
                                        <p>Phone</p>
                                        <p>{order.phoneNumber}</p>
                                    </div>
                                    <div className="orderItem">
                                        <p>CreatedAt</p>
                                        <p>{order.createdAt}</p>
                                    </div>
                                    <div className="orderItem">
                                        <p>Amount</p>
                                        <p>{order.amount}</p>
                                    </div>
                                    <div className="orderItem">
                                        <p>Address</p>
                                        <p>{order.address}</p>
                                    </div>
                                    <div className="orderItem">
                                        <p>Status</p>
                                        <p>{order.status}</p>
                                    </div>
                                </div>

                                <div className="orderWrapper_headerr">
                                    <p>ORDERED PRODUCTS</p>
                                </div>
                                <div className="orderProducts">
                                    {order.products.map((item) => (
                                        <div key={item._id} className="orderProducts_item">
                                            <div className="orderProduct_element">
                                                <p>title</p>
                                                <div className="orderElement_item">
                                                    <div className="orderElement_img">
                                                        <img src={item.product} alt="IM" />
                                                    </div>
                                                    <p>{item.title}</p>
                                                </div>
                                            </div>
                                            <div className="orderProduct_element">
                                                <p>Brand</p>
                                                <p>{item.brand}</p>
                                            </div>
                                            <div className="orderProduct_element">
                                                <p>type</p>
                                                <p>{item.type}</p>
                                            </div>
                                            <div className="orderProduct_element">
                                                <p>quantity</p>
                                                <p>{item.quantity}</p>
                                            </div>
                                            <div className="orderProduct_element">
                                                <p>price</p>
                                                <p>{item.price}</p>
                                            </div>
                                            <div className="orderProduct_element total">
                                                <p>Total</p>
                                                <p>{item.price * item.quantity}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="orderProducts_small">
                                    {order.products.map((product) => (
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
                                                <h2>Tsh. {product.price * product.quantity}</h2>
                                                <p><span>Quantity:</span> {product.quantity}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className="orderCreating">
                            <p>YOUR ORDER IS BEING CREATED......</p>
                            <div className="orderLode">
                                <CircularProgress />
                            </div>
                            <div className="order_button">
                                <Link to='/orders' className='link'>
                                    <button>GO TO ORDERS</button>
                                </Link>
                            </div>
                        </div>
                    </>
                }
            </div>
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
                    <p>Register or Log In to view order progress</p> 
                </div>
            </div>
        }
    </div>
  )
}

export default Success