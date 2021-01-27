import React from 'react';
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import * as CarrinhoAction from '../../store/actions/action';
import './index.css';

const Feed = ({roupas, adicionarCarrinho}) =>{
    return (
        <>
            <section className="text-center mt-5">
                <h3 className="display-4">Feed de roupas</h3>
                <ul className="m-4">
                    {roupas.map(item => (   
                        <li key={item.id}>{item.color} / {item.tamanho} / {item.preco}<button className="btn btn-primary btn-sm m-2" onClick={() => adicionarCarrinho(item)}>Comprar</button></li>   
                    ))}
                </ul>
            </section><hr className="w-25 mx-auto"/>
        </>
    );
}

const mapStateToProps = state => ({
    roupas: state.roupas.feed,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(CarrinhoAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Feed);