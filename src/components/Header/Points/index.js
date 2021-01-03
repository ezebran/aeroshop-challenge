import React,{useState, useEffect} from 'react';
import coinIcon from '../../../Static/icons/coin.svg';
import axios from 'axios';
import './styles.scss';

const Points = ({userPoints}) => {

    const [hideAmounts, setHideAmounts] = useState(true);
    const [points, setPoints] = useState(0);

    const addPoints = (amount) => {

        axios({
            method: 'post',
            url: 'https://coding-challenge-api.aerolab.co/user/points',

            headers: {
                'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmRiYmQ3MTI2ZjdkMjAwMjA0MTE0Y2YiLCJpYXQiOjE2MDgyMzY0MDF9.Sl8Cdihvsn-V8gQTDo2pooPS_jF2rFWXZPurX7ersHY'
            },
            data: {
                "amount": amount
            }
        })
        .then(() => {
            console.log(`You add ${amount} points.`)
            setPoints((points > 0 ? points : userPoints) + amount)
        })
        .catch(err => {
            console.error(err);
        })
    }

    return(
        <>
            <div className={`amounts ${hideAmounts ? 'hide-amounts' : ''}`}>
                <h4>Add: </h4>
                <div className="amount" onClick={()=>addPoints(1000)}>
                    <p>+1000</p>
                    <img src={coinIcon} alt="coin" />
                </div>
                <div className="amount" onClick={()=>addPoints(5000)}>
                    <p>+5000</p>
                    <img src={coinIcon} alt="coin" />
                </div>
                <div className="amount" onClick={()=>addPoints(7500)}>
                    <p>+7500</p>
                    <img src={coinIcon} alt="coin" />
                </div>
            </div>
            
            <div className='user-coins' onClick={()=>setHideAmounts(!hideAmounts)}>
                <p>{points ? points : userPoints}</p>
                <img src={coinIcon} alt="coin"/>
            </div>
        </>
    );
}

export default Points;