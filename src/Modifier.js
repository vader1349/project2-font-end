import React from 'react';
import './Modifier.css';
import {useSelector,useDispatch} from 'react-redux';
import {createCard} from './actions';

export function Modifier(){
    let view=document.getElementById("view");
    let editor=document.getElementById("editor");
    const openEditor=()=>{
        view.style.display="none";
        editor.style.display="flex";
    };

    const email=useSelector(state=>state.loginInfo.email);
    const dispatch=useDispatch();

    const addNewCard=()=>{
        var date = new Date();
        var message=document.getElementById("card-text").value;
        var textColor=document.getElementById("textColor").value;
        var backColor=document.getElementById("backColor").value;
        dispatch(createCard(date.getDate(),date.getMonth()+1,date.getFullYear(),textColor,backColor,message,email));
        document.getElementById("card-text").value="";
        document.getElementById("textColor").value="";
        backColor=document.getElementById("backColor").value="";
        view.style.display="block";
        editor.style.display="none";
    };

    return(
        <div id="modifier">
            <div id="view" onClick={openEditor}><span id="plus">+</span> Click here to create a new card!</div>
            <div id="editor">
                <textarea id="card-text"></textarea>
                <div id="card-option">
                    Text Color:<input type="text" className="color-text" id="textColor" title="Hex color code or name"></input>
                    Backgourd Color:<input type="text" className="color-text" id="backColor" title="Hex color code or name"></input>
                    <div id="submit" onClick={addNewCard}>Submit!</div>
                </div>
            </div>
        </div>
    );
}