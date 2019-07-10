import { interestFactory } from "./factory.js"
import { postInterestData, getInterestData } from "../api-handler/interests-handler.js"
import { listInterest } from "../component/listInterest.js"

function savePointsOfInterest() {
    getInterestData()
    .then (interest=>
        listInterest(interest)
    )
    let displayArea = document.querySelector("#container")
    document.querySelector("#saveBtn").addEventListener("click", function () {
        console.log("saveButton")
        let inputName = document.getElementById("nameOfInterest").value
        let inputDescription = document.querySelector("#descriptionOfInterest").value
        let inputLocation = document.getElementById("locationOfInterest")
        let selectLocation = inputLocation.options[inputLocation.selectedIndex].value
        let inputCost = document.querySelector("#costOfInterest").value
        let newInterest = interestFactory(inputName, parseInt(selectLocation), inputDescription, inputCost)
        console.log(newInterest)
        postInterestData(newInterest)
            .then(() => {
                getInterestData()
                    .then(interest =>
                        listInterest(interest)
                    )
            })
    })
}

export { savePointsOfInterest }