function getData (resource){
return fetch (`http://localhost:8088/${resource}`)
.then( data => data.json())
}

function deleteData (resource, id){
    return fetch(`http://localhost:8088/${resource}/${id}`,{
        method: "DELETE",
        headers:{
            "Content-Type": "application/json"
        }
    })
}

function putData(resource, data){
    return fetch(`http://localhost:8088/${resource}/${data.id}`, {
    method:"PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
    })

}
function  postData(resource, data){
    return fetch(`http://localhost:8088/${resource}`, {
    method:"POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
    })
}

export{getData, deleteData, postData, putData}
