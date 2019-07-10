import {assembleElements} from "./createOutput.js"
const listInterest = (interestArr) => {
    let displayOutput = document.querySelector("#displayInterest")
    displayOutput.innerHTML =""
    interestArr.forEach(interest => {
        displayOutput.appendChild(assembleElements(interest))
    });
}

export {listInterest}
