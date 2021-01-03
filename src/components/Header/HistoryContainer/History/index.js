import React from 'react';


import './styles.scss';

const History = ({history}) => {

    return(
        <div className="history-item">
            <img src={history.img.url} className="img-history" />
            <div className="info-history">
                <p className="category-history">{history.category}</p>
                <p className="name-history">{history.name}</p>
            </div>
        </div>
    );
}

export default History;