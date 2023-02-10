let absolute = document.querySelectorAll(".absolute")
let setas = document.querySelectorAll(".setas")

indexImg = 0

setas[0].addEventListener("click", ()=>{

    sumirImg()
if(indexImg === 0){
  indexImg = 2
}
else if(indexImg === 2){
     indexImg = 1
}
else{
    indexImg = 0
}
aparecerImg()
})

setas[1].addEventListener("click", ()=>{

    sumirImg()
if(indexImg === 0){
  indexImg = 1
}
else if(indexImg === 1){
     indexImg = 2
}
else{
    indexImg = 0
}
aparecerImg()
})



function sumirImg(){

absolute.forEach(function(divsImg){
    divsImg.classList.remove("on")
})
}

function aparecerImg(){
absolute[indexImg].classList.add("on")
}