import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../slices/cartSlice';


const ProductsCard = (props) => {

    const { img, title, price } = props;

    const [isAdded, setIsAdded] = useState(false);


    const dispatch = useDispatch();


    const handleAddToCart = () => {

        const item = { ...props };
        dispatch(addItem(item));

        setIsAdded(true);

        setTimeout(() => {
            setIsAdded(false);
        }, 3000);
    };


    return (
        <>
            <div className="product_card">
                <figure className='img_container'>
                    <img src={img} alt="item-img"  />
                </figure>

                <h4 className="title">{title}</h4>
                <h3 className="price"> {price.toLocaleString()}dt</h3>
                <button
                    type="button"
                    className={`btn ${isAdded ? 'added' : ''}`}
                    onClick={handleAddToCart}
                >
                    {isAdded ? 'Added' : 'Add to cart'}
                </button>
            </div>
        </>
    );
};

export default ProductsCard;