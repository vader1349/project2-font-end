import React from 'react';
import './Card.css';

export function Card(props){
    return(
        <div className="card" style={{borderColor:props.info.back_color}}>
            <div className="name">{props.info.email}</div>
            <div className="content" style={{backgroundColor:props.info.back_color,color:props.info.text_color}}>{props.info.message}</div>
        </div>
    );
}