import React,{useContext, useEffect} from 'react';
import { ProductsContext } from '../../../../context/productsProvider';

import ArrowLeft from '../../../../Static/icons/arrow-left.svg';
import ArrowRight from '../../../../Static/icons/arrow-right.svg';
import './styles.scss';

const Pagination = () => {
    const [page, setPage] = useContext(ProductsContext)[1];
    
    return(
        <div className="pagination">
            <img src={ArrowLeft} />
            <img src={ArrowRight} className="arrow-right" />
            <h2>16 of 32 products</h2>
        </div>
    );
}

export default Pagination;