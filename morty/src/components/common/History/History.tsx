import React from 'react';

const History = ({visibleSidebar, setVisibleSidebar}) => {

    const info = localStorage.getItem("name");

    return (
        <div className={`sidebar ${visibleSidebar ? 'sidebar-show' : ''}`}>

            <div className="sidebar__info">
                <h3 className="sidebar__title">HISTORY</h3>
                <p className="sidebar__info-title">Character:</p>
                <p className="sidebar__info-value">you viewed info about: {info}</p>
                <p className="sidebar__info-title">Location:</p>
                <p className="sidebar__info-value">value</p>
                <p className="sidebar__info-title">Episode:</p>
                <p className="sidebar__info-value">value</p>
            </div>
            <button className="sidebar__btn" onClick={() => setVisibleSidebar(false)}>Close</button>
        </div>
    )
}

export default History;
