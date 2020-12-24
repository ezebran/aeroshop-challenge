import React, { useContext } from 'react';
import { UserContext } from '../../context/userProvider';

import './styles.scss';
import logo from '../../Static/aerolab-logo.svg';
import coinIcon from '../../Static/icons/coin.svg';
import cartEmpty from '../../Static/icons/buy-white.svg';

export default function () {
    const [user, setUser] = useContext(UserContext);

    return(
        <div className="header">
            <img src={logo} />
            <div className="user-info">
                <p className='user-name'>Hi, {user.name}!</p>
                <div className='user-coins'>
                    <p>{user.points}</p>
                    <img src={coinIcon} alt="coin"/>
                </div>
                <div className="cart-data">
                    <p>0</p>
                    <img className="cart-icon" src={cartEmpty} />
                </div>
                
            </div>
        </div>
    )
}