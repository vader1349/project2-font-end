export const Action=Object.freeze({
    registerLoginInfo:'registerLoginInfo',
    saveCards:'saveCards',
});

export function registerLoginInfo(loginInfo){
    return{
        type:Action.registerLoginInfo,
        payload:loginInfo,
    };
}

export function saveCards(cards){
    return{
        type:Action.saveCards,
        payload:cards,
    };
}

function checkLogInError(response,logMessage){
    if(!response.ok){
        logMessage.innerHTML="*E-mail doesn't exist";
        throw Error(`${response.status},${response.statusText}`);
    }
    return response;
}

function checkError(response){
    if(!response.ok){
        throw Error(`${response.status},${response.statusText}`);
    }
    return response;
}

const url="https://theprivateserver.duckdns.org:8442";

export function login(email,password,overlay,logMessage){
    return dispacth=>{
        fetch(`${url}/user/${email}`)
        .then(response=>checkLogInError(response,logMessage))
        .then(response => response.json())
        .then(data=>{ 
            dispacth(registerLoginInfo(data));
            if(data.password===password){
                overlay.style.display="none";
            }else{
                logMessage.innerHTML="*Incorrect password";
            }
        })
        .catch(e=>console.error(e));
    }
}

export function loadCards(){
    return dispacth=>{
        fetch(`${url}/randomcards`)
        .then(response=>checkError(response))
        .then(response => response.json())
        .then(data=>{ 
            dispacth(saveCards(data.cards));
        })
        .catch(e=>console.error(e));
    }
}