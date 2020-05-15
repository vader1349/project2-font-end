import React from 'react';
import './Card.css';
import {deleteCard} from './actions';
import {useDispatch} from 'react-redux';

export function Card(props){
    const dispatch=useDispatch();
    const deleteThisCard=()=>{
        dispatch(deleteCard(props.info.id));
    };
    return(
        <div id="card" style={{borderColor:props.info.back_color}}>
            <div id="name">{props.info.month}.{props.info.day}.{props.info.year}</div>
            <div id="content" style={{backgroundColor:props.info.back_color,color:props.info.text_color}}>{props.info.message}</div>
            <img src={require("./images/delete.png")} id="delete" alt="delete" onClick={deleteThisCard}></img>
        </div>
    );
}