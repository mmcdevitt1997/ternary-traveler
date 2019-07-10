
function createForm(){
let formContainer = document.querySelector("#container")
formContainer.innerHTML = `

    <fieldset>
    <label for="NameOfEvent">Event Name</label>
    <input type="text" name="NameOfEvent" id="nameOfEvent">
</fieldset>
<fieldset>
    <label for="eventDate">Event Date</label>
    <input type="text" name="EventDate" id="eventDate" >
</fieldset>
<fieldset>
    <label for="locationOfEvent">Location of Event:</label>
    <input type="text" name="locationOfEvent" id="locationOfEvent">
</fieldset>
<button id= "saveBtn" type="button">Save Event</button>
<div id = "displayEvents"></div>
`
}