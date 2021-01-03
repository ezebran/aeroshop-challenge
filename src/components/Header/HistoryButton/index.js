import React,{useContext} from 'react';
import { HistoryContext } from '../../../context/historyProvider';
import cartEmpty from '../../../Static/icons/buy-white.svg';
import cartFull from '../../../Static/icons/buy-blue.svg';
import './styles.scss';

const HistoryButton = () => {
    
    const [history, setHistory] = useContext(HistoryContext)[0];
    const [hideHistory, setHideHistory] = useContext(HistoryContext)[1];

    const handleHide = (e) => {
        e.preventDefault();
        setHideHistory(!hideHistory);
    }

    return(
        <a href="#" className="cart-data" onClick={handleHide}>
            <p>{history.length}</p>
            <img className="cart-icon" src={history.length > 0 ? cartFull : cartEmpty} />
        </a>
    );
}

export default HistoryButton;