import React from 'react';
import st from '../index.scss'

const Card = (props) => {
    return (
        <div className="card dFlex fCol jBetween mr-40">
            <div className="image tCenter"><img width={128} height={128} src={props.card.img} alt="1"/></div>
            <p className="tCenter mt-7">{props.card.name}</p>
            <div className="footerCard dFlex jBetween itemsCenter mt-7">
                <div className="price dFlex fCol">
                    <span>ЦЕНА:</span>
                    <p>{props.card.price} руб.</p>
                </div>
                <button className="cartIcon" onClick={props.addInCart}>
                    <img src="/img/CardCartIcon.png" alt="AddCart"/>
                </button>
            </div>
        </div>
    );
};

export default Card;