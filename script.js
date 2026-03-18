const countEl = document.getElementById("count")
const incEl = document.getElementById("inc")
const decEl = document.getElementById("dec")
const saveEl = document.getElementById("save")
const saveTextEl = document.getElementById("saveText")

let peopleEnter = 0

incEl.addEventListener("click", ()=>{

    peopleEnter += 1
    countEl.innerHTML = peopleEnter
    
})

saveEl.addEventListener("click", ()=>{
    
   let savePeople = peopleEnter + " - "
  
    saveTextEl.innerHTML += savePeople
    peopleEnter = 0
    countEl.innerHTML = peopleEnter



    // let savePeople = peopleEnter + "  "
    // enteriesEL.innerHTML += savePeople 
    // peopleEnter = 0
    // enterEl.textContent = peopleEnter

})





