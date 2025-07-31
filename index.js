const decreaseBtn = document.getElementById("decreaseBtn")
const resetBtn= document.getElementById("resetBtn")
const increaseBtn= document.getElementById("increaseBtn")
let counter = 0;
counter = Number()

const counterLabel = document.getElementById("counterLabel")



increaseBtn.onclick = function(){
    counter +=1;
    console.log(counter)
    counterLabel.textContent = counter
}

resetBtn.onclick = function(){
    counter = 0;
    console.log(counter)
    counterLabel.textContent = counter
}

decreaseBtn.onclick = function(){
    counter -=1;
    console.log(counter)
    counterLabel.textContent = counter
}

