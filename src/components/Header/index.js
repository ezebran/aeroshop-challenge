import React, { useContext } from 'react';
import { UserContext } from '../../context/userProvider';
import Points from './Points';
import HistoryButton from './HistoryButton';
import HistoryContainer from './HistoryContainer';
import HistoryContext from '../../context/historyProvider';

import './styles.scss';
import logo from '../../Static/aerolab-logo.svg';



const Header = () => {
    const [user, setUser] = useContext(UserContext);


    return(
        <div className="header">
            <img src={logo} />
            <div className="user-info">
                <p className='user-name'>Hi, {user.name}!</p>
                <Points userPoints={user.points} />
                <HistoryContext>
                    <HistoryButton />
                    <HistoryContainer />
                </HistoryContext>
            </div>
        </div>
    )
}

export default Header;