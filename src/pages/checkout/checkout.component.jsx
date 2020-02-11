import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';

import './checkout.styles.scss';


const CheckoutPage = ({ cartItems, total }) => (

    <div className='checkout-page'>
        <div className='checkout-header'>
            <div classname='header-blcok'>
                <span>Product</span>
            </div>
            <div classname='header-blcok'>
                <span>Description</span>
            </div>
            <div classname='header-blcok'>
                <span>Quantity</span>
            </div>
            <div classname='header-blcok'>
                <span>Price</span>
            </div>
            <div classname='header-blcok'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )
        }
        <div className='total'>
            <span>Total: ${total}</span>
        </div>
    </div>
);

const mapStateToprops = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToprops)(CheckoutPage);