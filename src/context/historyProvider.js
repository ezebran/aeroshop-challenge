import {createContext,useState, useEffect} from 'react';
import axios from 'axios';

export default ({ children }) =>{

    const [history, setHistory] = useState([]);
    const [hideHistory, setHideHistory] = useState(true);
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmRiYmQ3MTI2ZjdkMjAwMjA0MTE0Y2YiLCJpYXQiOjE2MDgyMzY0MDF9.Sl8Cdihvsn-V8gQTDo2pooPS_jF2rFWXZPurX7ersHY';
    
    useEffect( () => {
        axios.get('https://coding-challenge-api.aerolab.co/user/history', {
            headers: {
                'Authorization':`Bearer ${token}`
            }
        })
        .then(res => {
            setHistory(res.data)
        })
        .catch(err => console.error(err))
    }, []);

    return (
            <HistoryContext.Provider value={[[history, setHistory],[hideHistory, setHideHistory]]}>
                {children}
            </HistoryContext.Provider>  
    );
}

export const HistoryContext = createContext();