import React,{useState} from 'react';
import ProductDetails from './ProductDetails';
import UserContext from './../../../../context/userProvider';
import coinIcon from '../../../../Static/icons/coin.svg';
import './styles.scss';

const Product = ({ articles }) => {
    const [hide, setHide] = useState(true);

    const hideDetails = (e) => {
        e.preventDefault();
        setHide(!hide);
    }

    return(
        <a href="#" onClick={hideDetails} >
            <article className="article">
                <UserContext>
                    <ProductDetails cost={articles.cost} hide={hide} id={articles._id} />
                </UserContext>
                <div className="product-price">
                    <p>{articles.cost}</p>
                    <img src={coinIcon}/>
                </div>
                <img src={articles.img.url} className="img-product" />
                <p className="category">{articles.category}</p>
                <p className="name">{articles.name}</p>
            </article>
        </a>
    );
}

export default Product;