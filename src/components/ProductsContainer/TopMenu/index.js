import React from 'react';
import Pagination from './Pagination';
import SortBy from './SortBy';

import './styles.scss';

const TopMenu = () => {
    return(
        <div className="top-menu">
            <Pagination />
            <SortBy />
        </div>
    );
}

export default TopMenu;