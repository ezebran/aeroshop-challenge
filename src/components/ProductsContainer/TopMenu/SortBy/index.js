import React,{useContext, useEffect} from 'react';
import { ProductsContext } from '../../../../context/productsProvider';

import './styles.scss';

const SortBy = () => {
    const [sort, setSort] = useContext(ProductsContext)[2];

    const handleChange = (e) => {
      setSort(e.target.value)
    }

    return(
      <div className="sort-by">
        <h2>Sort by:</h2>
        <select className="sort-select" value={sort} onChange={handleChange}>
          <option value="recent">Most recent</option>
          <option value="lowest">Lowest price</option>
          <option value="highest">Highest price</option>
        </select>
    </div>
    );
}

export default SortBy;