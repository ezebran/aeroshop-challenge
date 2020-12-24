import {createContext,useState, useEffect} from 'react';
import axios from 'axios';

export default ({ children }) =>{
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmRiYmQ3MTI2ZjdkMjAwMjA0MTE0Y2YiLCJpYXQiOjE2MDgyMzY0MDF9.Sl8Cdihvsn-V8gQTDo2pooPS_jF2rFWXZPurX7ersHY';
    
    const [user,setUser] = useState('');

    useEffect(async () => {
        await axios.get('https://coding-challenge-api.aerolab.co/user/me', {
            headers: {
                'Authorization':`Bearer ${token}`
            }
        })
        .then(res => {
            setUser(res.data)
        })
        .catch(err => console.error(err))
    }, [])

    return (            
            <UserContext.Provider value={[user, setUser]}>
                {children}
            </UserContext.Provider>  
    );
}

export const UserContext = createContext();