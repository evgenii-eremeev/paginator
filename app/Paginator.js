import React from 'react';
import paginator from './helpers/paginator.js';

function Paginator () {
    const newsOnPage = 10;
    const totalNewsCount = 1927;
    const currPage = window.location.search.split('page=').slice(-1)[0] || 1;
    const pagination = paginator(newsOnPage, totalNewsCount, currPage);
    const onArrowClick = (page) => {
        window.location.search = '?page=' + page;
    }

    return (
        <ul id="paginator">
            {+currPage !== 1 ?
                <li id="left-arrow">
                    <a href="#" onClick={() => onArrowClick(+currPage - 1)}>
                        {"<"}
                    </a>
                </li> : ""
            }
            {pagination.map((item, idx) => (
                <li key={idx}>
                    {item !== '...' ?
                        <a
                            href={window.location.origin + '/news?page=' + item}
                            className={item === +currPage ? 'current' : ''}
                            >
                            { item }
                        </a> : item
                    }
                </li>
            ))}
            {+currPage !== pagination.slice(-1)[0] ?
                <li id="right-arrow">
                    <a href="#" onClick={() => onArrowClick(+currPage + 1)}>
                        {">"}
                    </a>
                </li> : ""
            }
        </ul>
    );
}

export default Paginator;
