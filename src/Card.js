import React from 'react';
import './Card.css';

export function Card(props){
    return(
        <div id="card" style={{borderColor:props.info.back_color}}>
            <div id="name">{props.info.month}.{props.info.day}.{props.info.year}</div>
            <div id="content" style={{backgroundColor:props.info.back_color,color:props.info.text_color}}>{props.info.message}</div>
        </div>
    );
}