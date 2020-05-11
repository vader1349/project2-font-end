import React from 'react';
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {login} from './actions';

function App() {

  const dispatch=useDispatch();

  window.onload=()=>{
    var signinPanel=document.getElementById("signin");
    var loginPanel=document.getElementById("login");
    var signNoti=document.getElementById("sign");
    var logNoti=document.getElementById("log");
    signNoti.onclick=()=>{
      signinPanel.style.display="flex";
      loginPanel.style.display="none";
    }
    logNoti.onclick=()=>{
      signinPanel.style.display="none";
      loginPanel.style.display="flex";
    }
  }

  const loginButtonAction=()=>{
    var overlay=document.getElementById("overlay");
    var logMessage=document.getElementById("log-message");
    var email=document.getElementById("email-text").value;
    var password=document.getElementById("password-text").value;
    dispatch(login(email,password,overlay,logMessage));
  }
  
  const signInButtonAction=()=>{
    var overlay=document.getElementById("overlay");
    var messageDiv=document.getElementById("sign-message");
    var message=signInCheck();
      if(message==="Sucess"){
        overlay.style.display="none";
      }else{
        messageDiv.innerHTML=message;
      }
  }

  function signInCheck(){
    var email=document.getElementById("sign-email").value;
    var name=document.getElementById("name").value;
    var password=document.getElementById("sign-password").value;
    var comfirm=document.getElementById("comfirm").value;
    var emailReg = /^([a-zA-Z]|[0-9])(\w)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    var nameReg=/^([a-zA-Z0-9]{1,20})$/;
    var passwordReg=/^([a-zA-Z0-9]{8,20})$/;
    if(!emailReg.test(email)){
        return "*Wrong format of e-mail address";
    }
    else if(!nameReg.test(name)){
        return "*Nickname should contain 1-20 numbers or charactors";
    }
    else if(!passwordReg.test(password)){
        return "*Password should contain 8-20 numbers or charactors";
    }
    else if(comfirm!==password){
        return "*Passwords don't match";
    }
    else{
        return 'Sucess';
    }
  }

  return (
    <div className="App">
      <div id="overlay">
        <div id="login">
          <div className="title"><span>P</span>rivate</div>
          <div className="row">
            <div className="label">E-Mail:</div>
            <input type="text" className="text" id="email-text"></input>
          </div>
          <div className="row">
            <div className="label">Password:</div>
            <input type="text" className="text" id="password-text"></input>
          </div>
          <div className="message" id="log-message"></div>
          <div className="button" id="log-button" onClick={loginButtonAction}>Login</div>
          <div className="notification" id="sign">Or sigin in now!</div>
        </div>  
        <div id="signin">
          <div className="title"><span>P</span>rivate</div>
          <div className="row">
            <div className="label">E-Mail:</div>
            <input type="text" className="text" id="sign-email"></input>
          </div>
          <div className="row">
            <div className="label">Nickname:</div>
            <input type="text" className="text" id="name"></input>
          </div>
          <div className="row">
            <div className="label">Password:</div>
            <input type="text" className="text" id="sign-password"></input>
          </div>
          <div className="row">
            <div className="label">Comfirm Password:</div>
            <input type="text" className="text" id="comfirm"></input>
          </div>
          <div className="message" id="sign-message"></div>
          <div className="button" id="sign-button" onClick={signInButtonAction}>Sign In</div>
          <div className="notification" id="log">Aready sigined in? Log in now!</div>
        </div>  
      </div>
      <div id="main">
        <img id="head-img" src={require("./images/head.png")} alt="Author: DavidRockDesign/pixabay"/>
        <div id="head"><span>P</span>rivate</div>
      </div>
    </div>
  );
}

export default App;
