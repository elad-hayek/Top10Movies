import { API_ADDRESS } from "./Constants";

export const getData = (path, callback, errorCallback) =>{

    fetch(`${API_ADDRESS}${path}`)
    .then(response=>{
        if(response.status !== 200){
            return response.text().then(text=> {throw new Error(text)})
        }
        return response.json();
    })
    .then(data=>{
        callback(data);
    })
    .catch(err=>{
        errorCallback(err);
        setTimeout(()=>{errorCallback("")}, 5000);
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
            return response.text().then(text=> {throw new Error(text)})
        }
        return response.json();
    })
    .then(data=>{
        callback(data);
        cleanupCallback();
    })
    .catch(err=>{
        errorCallback(err);
        setTimeout(()=>{errorCallback("")}, 5000);
        cleanupCallback();
        })
}