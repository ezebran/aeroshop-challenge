import {createContext,useState, useEffect} from 'react';
import axios from 'axios';

export default ({ children }) =>{
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState('recent');
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmRiYmQ3MTI2ZjdkMjAwMjA0MTE0Y2YiLCJpYXQiOjE2MDgyMzY0MDF9.Sl8Cdihvsn-V8gQTDo2pooPS_jF2rFWXZPurX7ersHY';
    
    useEffect(async () => {
        await axios.get('https://coding-challenge-api.aerolab.co/products', {
            headers: {
                'Authorization':`Bearer ${token}`
            }
        })
        .then(res => {
            setArticles(res.data)
        })
        .catch(err => console.error(err))
    }, [])

    useEffect(() => {
        if(sort === 'recent'){
            return articles
        } else if (sort === 'highest') {
            return setArticles(articles.sort((a, b) => {return a.cost - b.cost}))
        } else if (sort === 'lowest') {
            return setArticles(articles.sort((a, b) => {return b.cost - a.cost}))
        }
    }, [sort])

    return (
            <ProductsContext.Provider value={[[articles, setArticles],[page, setPage],[sort, setSort]]}>
                {children}
            </ProductsContext.Provider>
    );
}

export const ProductsContext = createContext();