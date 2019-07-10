import {refreshDOM} from "./helper.js"
import{deleteInterestData} from "../api-handler/interests-handler.js"
import {editBtnControl} from "../component/edit.js"

function assembleElements(interest) {
    let el = document.createElement("div");
    let div = document.createElement("div");
    let section = document.createElement("section");
    let deleteBtn = document.createElement("button");
    let editBtn = document.createElement("button");
    sectionHTML(interest, section)
    el.appendChild(section);
    el.appendChild(div)
    div.setAttribute("id", `eventContainer-${interest.id}`)
    deleteBtnControl(interest, deleteBtn)
    editBtnControl(interest, editBtn)
    el.appendChild(deleteBtn)
    el.appendChild(editBtn)
    return el
}


function sectionHTML(interest, section) {
    section.innerHTML = `
   <section id = "${interest.id}">
  <h2> ${interest.name} </h2>
       <article>
           <p> ${interest.cost} ${interest.description} </p>
        </article>
  </section>
  `
}


function deleteBtnControl(interest, deleteBtn) {

    deleteBtn.setAttribute("id", `${interest.id}`)
    deleteBtn.textContent = "delete"
    deleteBtn.addEventListener("click", () => {
        alert("Are you sure you want to delete")
        let id = event.target.id

        deleteInterestData(id)
            .then(() => {
                refreshDOM()
            })

    })

}



export {assembleElements}