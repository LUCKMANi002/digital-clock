


const bodys = document.getElementById("body")
const styleH1 = document.getElementById("style-h1")
const clockP = document.getElementById("clockP")
const styletButton = document.getElementById("style-button")


   
function update(){
    
   const clock = new Date()
   let h = clock.getHours()
   let m =clock. getMinutes()
   let s =clock. getSeconds()
   clockP.innerHTML = `${h}: ${m} : ${s}`
   clockP.style.fontSize = "50px"
   clockP.style.fontWeight = "bold"
}
    setInterval(update,1000)
    update()
    

 function styleButton(){
    styleH1.classList.toggle("red")
    bodys.classList.toggle("body")


}


