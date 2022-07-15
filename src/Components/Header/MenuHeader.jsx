import React from 'react';


const MenuHeader = () => {
    return (
        <ul className="dFlex itemsCenter">
            <li className="dFlex itemsCenter">
                <img src="/img/CertIcon.png" alt="Cart"/>
                <span className="ml-8">1560 руб.</span>
            </li>
            <li>
                <img src="/img/FavoriteIcon.png" alt="Favorite"/>
            </li>
            <li>
                <img src="/img/ProfileIcon.png" alt="Profile"/>
            </li>
        </ul>
    );
};

export default MenuHeader;