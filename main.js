
//بسم الله الرحمن الرحيم
let $ = document
///
let allelements = $.getElementById("elements")
let theInput = $.getElementById("theInput")
let theAdd = $.getElementById("theAdd")
///
let removaAll =$.getElementById("bigRemove")
let allDivs = $.querySelectorAll("div")
//localStorage.setItem("allWorks","python,js,ramadan")

let localArray = []
if(localStorage.getItem("allWorks") !== null){
localArray = localStorage.getItem("allWorks").split(",")

all()
}
function all(){
if(localStorage.getItem("allWorks").length>0){
localArray.forEach((content)=>{
if(content === ``){
localArray.splice(localArray.indexOf(``),1)
}
else{
let div = $.createElement("div")
div.id = "theThink"
let theH1 = $.createElement("h1")
theH1.id = "theContent"
theH1.textContent = content
let deletButton  = $.createElement("button")
deletButton.id = "delete"
deletButton.innerHTML = "delete"
//appand
div.append(theH1)
div.append(deletButton)
allelements.append(div)
//delet
deletButton.onclick = ()=>{
localArray.splice(localArray.indexOf(theH1.textContent),1)
localStorage.setItem("allWorks",localArray)
div.remove()
}
}
})}}
//
theAdd.onclick = ()=>{
if(theInput.value.length ===0){
    alert(`you dont enter any think`)
}
else{
localArray.push(theInput.value)
localStorage.setItem("allWorks",localArray)
location.reload()
}
}

//

removaAll.onclick = ()=>{
localStorage.removeItem("allWorks")
allDivs.forEach((divs)=>{
    if(divs.id === "theThink"){
        divs.remove()
        
    }
})
location.reload()
}