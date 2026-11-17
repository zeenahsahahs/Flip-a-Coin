const heads = document.getElementById("heads");
const tails = document.getElementById("tails");
const button = document.getElementById("button");
const hCoin = document.getElementById("headsCoin");
const tCoin = document.getElementById("tailsCoin");

if(heads.style.display === "none" && tails.style.display === "none"){
    randomCoin();
}

button.addEventListener("click", randomCoin);

hCoin.addEventListener("click", randomCoin);
tCoin.addEventListener("click", randomCoin);

function randomCoin(){
    const bit = Math.round(Math.random());
    if(bit === 0){
        heads.style.display = "block";
        tails.style.display = "none";
    } else {
        heads.style.display = "none";
        tails.style.display = "block";
    }
}