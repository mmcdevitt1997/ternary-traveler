import { putInterestData } from "../api-handler/interests-handler.js"
import { interestFactory } from "./factory"
import { refreshDOM } from "./helper.js"

function createEventEditForm(interest) {
    return `<fieldset>
     <label for="NameOfInterest">Name of interest:</label>
     <input type="text" name="NameOfInterest" id="editNameOfInterest" value = "${interest.name}">
     <input type="hidden" id="editInterest-id" value=${interest.id}>
 </fieldset>
 <fieldset>
     <label for="descriptionOfInterest">Description of interest:</label>
     <input type="text" name="descriptionOfInterest" id="editDescriptionOfInterest" value = "${interest.description}" >
 </fieldset>
 <fieldset>
     <label for="costOfInterest ">Cost:</label>
     <input type="number" name="costOfInterest" id="editCostOfInterest" value = "${interest.cost}">
 </fieldset>
 <fieldset>
     <label for="pickLocation">Choose your location:</label>
     <select id = "locationOfInterest">
     <option value=1>Italy</option>
     <option value=2>Switzerland</option>
     <option value=3>France</option>
     </select>
 </fieldset>
 <button id= "editSaveBtn" type="button">Save Edit</button>`
}

function addEditFormDOM(editContainer, editForm) {
    document.querySelector(`#${editContainer}`).innerHTML = editForm;
    let editName = document.getElementById("editNameOfInterest").value
    let editDescription = document.querySelector("#editDescriptionOfInterest").value
    let editLocation = document.getElementById("editLocationOfInterest")
    let editSelectLocation = editLocation.options[inputLocation.selectedIndex].value
    let editCost = document.querySelector("#ediCostOfInterest").value
    let editId = document.querySelector("#editInterest-id").value
    document.querySelector("#editSaveBtn").addEventListener("click", () => {
        console.log
        let editInterest = interestFactory(editName, parseInt(editSelectLocation ), editDescription, editCost)
        editInterest.id = editId
        putInterestData(editInterest)
            .then(() => {
                refreshDOM()
            })
    })
}

function editBtnControl(interest, editBtn) {
    editBtn.setAttribute("id", `editBtn-${interest.id}`)
    editBtn.textContent = "edit"
    editBtn.addEventListener("click", () => {
        console.log("edit button")
        let editForm = createEventEditForm(interest)
        addEditFormDOM(div.id, editForm)
    })
}
export{editBtnControl}