import React,{useContext, useEffect} from 'react';
import { ProductsContext } from '../../../context/productsProvider';
import Product from './Product';

import './styles.scss';

const ListOfArticles = () => {
    const [articles, setArticles] = useContext(ProductsContext)[0];
    const [page, setPage] = useContext(ProductsContext)[1];
    useEffect(() => {
        setPage(2)
    }, [])
    return(
        <section className="list-of-articles"> 
            {
                articles.map((article) => {
                        return <Product articles={article} key={article._id}/>
                    })
            }
        </section>
    );
}

export default ListOfArticles;