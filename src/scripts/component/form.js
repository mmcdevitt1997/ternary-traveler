import {savePointsOfInterest} from "./eventListener"

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
    <input type="text" name="descriptionOfInterest" id="descriptionOfInterest" >
</fieldset>
<fieldset>
    <label for="costOfInterest ">Cost:</label>
    <input type="number" name="costOfInterest" id="costOfInterest">
</fieldset>
<fieldset>
    <label for="pickLocation">Choose your location:</label>
    <select id = "locationOfInterest">
    <option value=1>Italy</option>
    <option value=2>Switzerland</option>
    <option value=3>France</option>
    </select>
</fieldset>
<button id= "saveBtn" type="button">Save</button>
<div id ="displayInterest">
<h3>Italy</h3>
<div id= "italyDisplay"></div>
<h3>Switzerland</h3>
<div id= "SwitzerlandDisplay"></div>
<h3>France</h3>
<div id="franceDisplay"></div>
</div>
`
savePointsOfInterest()

}


export {createForm}