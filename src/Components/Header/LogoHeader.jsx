import React from 'react';

const LogoHeader = () => {
    return (
        <div className="itemsCenter dFlex">
            <img height={64} width={64} src="/img/logo.png" alt="Logo"/>
            <div className="dFlex fCol">
                <h3>Asterisk</h3>
                <p>Магазин корейской косметики</p>
            </div>
        </div>
    );
};

export default LogoHeader;