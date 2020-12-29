import React from 'react';
import coinIcon from '../../../../Static/icons/coin.svg';
import './styles.scss';

const Product = ({ articles }) => {
    return(
        <article className="article">
            <div className="product-price">
                <p>{articles.cost}</p>
                <img src={coinIcon}/>
            </div>
            <img src={articles.img.url} className="img-product" />
            <p className="category">{articles.category}</p>
            <p className="name">{articles.name}</p>
        </article>
    );
}

export default Product;