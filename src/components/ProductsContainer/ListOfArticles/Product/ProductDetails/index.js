import React, { useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../../../../context/userProvider';
import { HistoryContext } from '../../../../../context/historyProvider';
import coinIcon from '../../../../../Static/icons/coin.svg';
import './styles.scss';

const ProductDetails = ({ cost, hide, article }) => {
    const [user, setUser] = useContext(UserContext);
    const [history, setHistory] = useContext(HistoryContext)[0];

    const redeemProduct = (article) => {
        axios({
            method: 'post',
            url: 'https://coding-challenge-api.aerolab.co/redeem',

            headers: {
                'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmRiYmQ3MTI2ZjdkMjAwMjA0MTE0Y2YiLCJpYXQiOjE2MDgyMzY0MDF9.Sl8Cdihvsn-V8gQTDo2pooPS_jF2rFWXZPurX7ersHY'
            },
            data: {
                "productId": article._id
            }
        })
        .then(() => {
            setHistory(history => history.concat(article))
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
            <button className={`reedem-btn ${cost > user.points ? 'disabled' : ''}`} onClick={()=>redeemProduct(article)} >Reedem</button>
        </div>
    );
}

export default ProductDetails;