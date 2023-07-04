import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../slices/cartSlice';


const Header = () => {

    const { cartItems } = useSelector((state) => state.cart);

    const dispatch = useDispatch();


    const handleOpenCart = (open) => {
        dispatch(toggleCart(open));
    };


    const cartQuantity = cartItems.length;


    return (
        <>
            <header id="header">
                <div className="container">
                    <div className="navbar">
                        <h4>Makeup store</h4>
                        <div className="justify-content-end">
                            <div
                                title="Cart"
                                className="cart_icon"
                                onClick={() => handleOpenCart(true)}
                            >
                               
                                <img className='Bag' src="/images/bag-shopping-solid.svg" alt="bag-shopping-solid" />
                                <span className="badge">{cartQuantity}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;