export const Action=Object.freeze({
    registerLoginInfo:'registerLoginInfo',
    saveCards:'saveCards',
    addCard:'addCard',
});

function checkLogInError(response,logMessage){
    if(!response.ok){
        logMessage.innerHTML="*E-mail doesn't exist";
        throw Error(`${response.status},${response.statusText}`);
    }
    return response;
}

function checkSignInError(response,signMessage){
    if(!response.ok){
        signMessage.innerHTML="*E-mail has already existed";
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

const url="https://theprivateserver.duckdns.org:8442";

export function login(email,password,overlay,logMessage){
    return dispacth=>{
        fetch(`${url}/user/${email}`)
        .then(response=>checkLogInError(response,logMessage))
        .then(response => response.json())
        .then(data=>{ 
            if(data.password===password){
                overlay.style.display="none";
                dispacth(registerLoginInfo(data));
                dispacth(loadCards(email));
            }else{
                logMessage.innerHTML="*Incorrect password";
            }
        })
        .catch(e=>console.error(e));
    }
}

function loadCards(email){
    return dispacth=>{
        fetch(`${url}/cards/${email}`)
        .then(response=>checkError(response))
        .then(response => response.json())
        .then(data=>{ 
            dispacth(saveCards(data.cards));
        })
        .catch(e=>console.error(e));
    }
}

export function createCard(day,month,year,textColor,backColor,message,email){
    const card={day,month,year,textColor,backColor,message,email};
    const options={
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(card),
    }
    return dispacth=>{
        fetch(`${url}/cards`,options)
        .then(response=>checkError(response))
        .then(response => response.json())
        .then(data=>{ 
            dispacth(addCard({
                id:data.id,
                email:email,
                message:message,
                text_color:textColor,
                back_color:backColor,
                day:day,
	            month:month,
	            year:year,
            }));
        })
        .catch(e=>console.error(e));
    }
}

export function addCard(card){
    return{
        type:Action.addCard,
        payload:card,
    };
}

export function signIn(day,month,year,email,name,password,overlay,signMessage){
    const info={day,month,year,email,name,password};
    const options={
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(info),
    }
    return dispacth=>{
        fetch(`${url}/user`,options)
        .then(response=>checkSignInError(response,signMessage))
        .then(response => response.json())
        .then(data=>{ 
            overlay.style.display="none";
            dispacth(registerLoginInfo(data));
            dispacth(loadCards(email));
        })
        .catch(e=>console.error(e));
    }
}