export const Action=Object.freeze({
    registerLoginInfo:'registerLoginInfo',
});

export function registerLoginInfo(loginInfo){
    return{
        type:Action.registerLoginInfo,
        payload:loginInfo,
    };
}

function checkError(response,logMessage){
    if(!response.ok){
        logMessage.innerHTML="*E-mail doesn't exist";
        throw Error(`${response.status},${response.statusText}`);
    }
    return response;
}

const url="https://theprivateserver.duckdns.org:8442";

export function login(email,password,overlay,logMessage){
    return dispacth=>{
        fetch(`${url}/user/${email}`)
        .then(response=>checkError(response,logMessage))
        .then(response => response.json())
        .then(data=>{ 
            console.log(password);
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