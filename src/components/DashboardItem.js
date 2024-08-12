import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const DashboardItem = ({ item }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = () => {
        dispatch(addToCart(item));
        navigate('/cart');
    };

    return (
        <div className="card">
            <img src={item.imageUrl} alt={item.name} />
            <div className="card-content">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

export default DashboardItem;