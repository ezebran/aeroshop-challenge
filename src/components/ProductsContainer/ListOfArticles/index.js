import React,{useContext} from 'react';
import { ProductsContext } from '../../../context/productsProvider';
import Product from './Product';

import './styles.scss';

const ListOfArticles = () => {
    const [articles, setArticles] = useContext(ProductsContext)[0];
    const [page, setPage] = useContext(ProductsContext)[1];
    const [sort, setSort] = useContext(ProductsContext)[2];

    const sorted = (array, method) => {
        if(method === 'recent'){
            return array
        } else if (method === 'lowest') {
            return array.sort((a, b) => {return a.cost - b.cost})
        } else if (method === 'highest') {
            return array.sort((a, b) => {return b.cost - a.cost})
        }
    }

    const sliced = (array, page) => {
        return array.slice((page * 16) - 16, (page * 16))
    }

    const sortedArray = sorted(articles, sort)
    const slicedArray = sliced(sortedArray, page)
    return(

        <section className="list-of-articles"> 
            {
                slicedArray.map((article) => {
                        return <Product articles={article} key={article._id}/>
                    })
            }
        </section>
    );
}

export default ListOfArticles;