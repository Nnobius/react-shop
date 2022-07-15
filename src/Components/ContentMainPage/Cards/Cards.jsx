import React from 'react';
import Card from "./Card/Card";

const Cards = (props) => {
    return (
        <div className="dFlex">
            {props.Products.map(card => <Card card={card} addInCart={() => console.log(card)}/>)}
        </div>
    );
};

export default Cards;