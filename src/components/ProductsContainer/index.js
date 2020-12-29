import React,{useState, useEffect} from 'react';
import ListOfArticles from './ListOfArticles';
import TopMenu from './TopMenu';
import ProductsContext from '../../context/productsProvider';

const ProductsContainer = () => {

    return(
        <>
            <ProductsContext>
                <TopMenu />
                <ListOfArticles />
            </ProductsContext>
        </>
    );
}

export default ProductsContainer;