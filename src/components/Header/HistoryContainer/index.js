import React,{useContext} from 'react';
import History from './History';
import './styles.scss';

import { HistoryContext } from '../../../context/historyProvider';

const HistoryContainer = () => {

    const [history, setHistory] = useContext(HistoryContext)[0];
    const [hideHistory, setHideHistory] = useContext(HistoryContext)[1];


    return(
        <div className={`history-container ${hideHistory ? 'hide-history' : ''}`}>
            <h2>Products history:</h2>
            {
                history.map((history) => {
                        return  <History history={history} key={history.createDate} />
                    })
            }
                
        </div>
    );
}

export default HistoryContainer;