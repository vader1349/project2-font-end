import React from 'react';
import './Modifier.css';

export function Modifier(){
    let view=document.getElementById("view");
    let editor=document.getElementById("editor");
    const openEditor=()=>{
        view.style.display="none";
        editor.style.display="flex";
    };
    const finishEditing=()=>{   
        view.style.display="block";
        editor.style.display="none";
    };
    return(
        <div id="modifier">
            <div id="view" onClick={openEditor}><span id="plus">+</span> Click here to create a new card!</div>
            <div id="editor">
                <textarea id="card-text"></textarea>
                <div id="card-option">
                    Text Color:<input type="text" className="color-text"></input>
                    Backgourd Color:<input type="text" className="color-text"></input>
                    <div id="submit" onClick={finishEditing}>Submit!</div>
                </div>
            </div>
        </div>
    );
}