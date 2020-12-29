import React from 'react';

import BannerImg from '../../Static/header-x2.png';
import './styles.scss';

const Banner = () => {
    const img = { backgroundImage: `url(${BannerImg})` }
    return (
        <div className='banner' style={img}>
            <h1 className='banner-title'>Electronics</h1>
        </div>
    )
}

export default Banner;