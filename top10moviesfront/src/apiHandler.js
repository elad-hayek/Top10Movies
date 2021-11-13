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
        console.log(data)
        callback(data);
    })
    .catch(err=>{
        console.log(err);
        errorCallback(err);
    })

};