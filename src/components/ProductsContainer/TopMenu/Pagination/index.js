import React,{useContext, useEffect} from 'react';
import { ProductsContext } from '../../../../context/productsProvider';

import ArrowLeft from '../../../../Static/icons/arrow-left.svg';
import ArrowRight from '../../../../Static/icons/arrow-right.svg';
import './styles.scss';

const Pagination = () => {
    const [articles, setArticles] = useContext(ProductsContext)[0];
    const [page, setPage] = useContext(ProductsContext)[1];
    
    return(
        <div className="pagination">
            <a href="#"><img src={ArrowLeft} /></a>
            <a href="#"><img src={ArrowRight} className="arrow-right" /></a>
            <h2>{16*page} of {articles.length} products</h2>
        </div>
    );
}

export default Pagination;