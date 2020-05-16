import React from 'react';
import './Card.css';
import {deleteCard} from './actions';
import {useDispatch} from 'react-redux';

export function Card(props){
    const dispatch=useDispatch();
    const deleteThisCard=()=>{
        dispatch(deleteCard(props.info.id));
    };
    const showComfirm=()=>{
        var comfirm=document.getElementById("comfirm-overlay");
        comfirm.style.display="flex";
    };
    const comfirm=()=>{
        deleteThisCard();
        finish();
    }
    const finish=()=>{
        var comfirm=document.getElementById("comfirm-overlay");
        comfirm.style.display="none";
    }
    return(
        <div id="card" style={{borderColor:props.info.back_color}}>
            <div id="name">{props.info.month}.{props.info.day}.{props.info.year}</div>
            <div id="content" style={{backgroundColor:props.info.back_color,color:props.info.text_color}}>{props.info.message}</div>
            <img src={require("./images/delete.png")} id="delete" alt="delete" onClick={showComfirm}></img>
            <div id="comfirm-overlay">
                <div id="comfirm-text">
                    <p>Continue to delete? This action doesn't allow rollback!</p>
                    <div id="comfirm-buttons">
                        <div className="button" onClick={comfirm}>Yes!</div>
                        <div className="button" onClick={finish}>Wait!</div>
                    </div>
                </div>
                <div id="comfirm-title"><span className="pink">P</span>rivate</div>
            </div>
        </div>
    );
}