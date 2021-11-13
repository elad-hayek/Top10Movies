import { API_ADDRESS } from "./Constants";

export const getData = (path, callback, errorCallback) =>{

    fetch(`${API_ADDRESS}${path}`)
    .then(response=>{
        if(response.status !== 200){
            console.log("there was a problem ", response.status)
        }
        return response.json();
    })
    .then(data=>{
        callback(data);
    })
    .catch(err=>{
        console.log(err);
        errorCallback(err);
    })

};


export const postData = (path, method, data, callback, errorCallback, cleanupCallback=()=>{}) =>{
    fetch(`${API_ADDRESS}${path}`, {
        method: method,
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response=>{
        if(response.status !== 200){
            console.log("there was a problem ", response.status)
        }
        return response.json();
    })
    .then(data=>{
        callback(data);
        cleanupCallback();
    })
    .catch(err=>{
        console.log(err);
        errorCallback(err);
        cleanupCallback();
    })
}