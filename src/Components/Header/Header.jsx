import React from 'react';
import LogoHeader from "./LogoHeader";
import MenuHeader from "./MenuHeader";
import style from "./index.scss"

const Header = () => {
    return (
        <header className="dFlex jBetween">
            <LogoHeader />
            <MenuHeader />
        </header>
    );
};

export default Header;