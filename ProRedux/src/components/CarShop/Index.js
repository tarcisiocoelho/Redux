import React from 'react';
import {connect} from "react-redux";

const CarShop = ({roupa}) => {
    return(
        <>
            <div className="mb-5 text-center">
                <h4>Compras</h4>
                <strong className="lead bg-light m-5">{roupa.color} / {roupa.tamanho} / {roupa.preco}</strong>
            </div>
        </>
    );
}

export default connect((state)=>({
    roupa: state.roupas.roupa
}))(CarShop);