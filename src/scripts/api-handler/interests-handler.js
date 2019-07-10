import {getData, deleteData, postData, putData} from "./api.js"

function getInterestData(){
    return getData("interests")
}

function deleteInterestData(id){
    return deleteData("interests", id)
}

function postInterestData(placeholder){
    return postData("interests", placeholder)
}

function putInterestData(data){
    return putData("interests", data)
}
export{getInterestData, putInterestData, postInterestData, deleteInterestData}