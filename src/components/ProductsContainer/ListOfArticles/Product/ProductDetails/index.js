import React, { useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../../../../context/userProvider';
import coinIcon from '../../../../../Static/icons/coin.svg';
import './styles.scss';

const ProductDetails = ({ cost, hide, id }) => {
    const [user, setUser] = useContext(UserContext);

    const redeemProduct = (id) => {
        axios({
            method: 'post',
            url: 'https://coding-challenge-api.aerolab.co/redeem',

            headers: {
                'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmRiYmQ3MTI2ZjdkMjAwMjA0MTE0Y2YiLCJpYXQiOjE2MDgyMzY0MDF9.Sl8Cdihvsn-V8gQTDo2pooPS_jF2rFWXZPurX7ersHY'
            },
            data: {
                "productId": id
            }
        })
        .then(() => {
            console.log('You redeemed the product with the following id: ' + id)
        })
        .catch(err => {
            console.error(err);
        })
    }

    return(
        <div className={`productDetails ${hide ? 'hide-details' : ''}`}>
            <h3><img src={coinIcon}/>{user.points}</h3>
            <h3>- <img src={coinIcon}/>{cost}</h3>
            <hr/>
            <h3>{user.points - cost}</h3>
            <button className={`reedem-btn ${cost > user.points ? 'disabled' : ''}`} onClick={()=>redeemProduct(id)} >Reedem</button>
        </div>
    );
}

export default ProductDetails;