
function createForm(){
let formContainer = document.querySelector("#container")
formContainer.innerHTML = `
<h1> The Ternary Traveler </h1>
<h4> Please submit your points of interest </h4>
    <fieldset>
    <label for="NameOfInterest">Name of interest:</label>
    <input type="text" name="NameOfInterest" id="nameOfInterest">
</fieldset>
<fieldset>
    <label for="descriptionOfInterest">Description of interest:</label>
    <input type="text" name="descriptionOfInterest" id="descriptionOfInterest:" >
</fieldset>
<fieldset>
    <label for="locationOfEvent">Cost:</label>
    <input type="text" name="locationOfEvent" id="locationOfEvent">
</fieldset>
</fieldset>
<fieldset>
    <label for="pickLocation">Choose your location:</label>
    <select>
    <option value="Italy">Italy</option>
    <option value="Switzerland">Switzerland</option>
    <option value="France">France</option>
    </select>
</fieldset>
<button id= "saveBtn" type="button">Save</button>
<div id = "displayEvents"></div>
`
}
export {createForm}