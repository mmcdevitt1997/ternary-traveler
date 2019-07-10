import {getInterestData} from "../api-handler/interests-handler.js"
import {listInterest} from "../component/listInterest.js"

function refreshDOM (){
    let displayInterestOutput = document.querySelector("#displayInterest")
   displayInterestOutput.innerHTML = ""
    getInterestData()
        .then(taco =>
            listInterest(taco)
        )
}
export {refreshDOM}