const countEl = document.getElementById("count")
const incEl = document.getElementById("inc")
const decEl = document.getElementById("dec")
const saveEl = document.getElementById("save")
const saveTextEl = document.getElementById("saveText")

let peopleEnter = 0

incEl.addEventListener("click", ()=>{

    peopleEnter += 1
    countEl.textContent = peopleEnter
    
})

decEl.addEventListener("click", ()=>{

    peopleEnter -= 1
    countEl.textContent = peopleEnter
    
})

saveEl.addEventListener("click", ()=>{
    
   let savePeople = peopleEnter + " - "
  
    saveTextEl.textContent += savePeople
    peopleEnter = 0
    countEl.textContent = peopleEnter


})





