var elements = document.getElementsByClassName("color");

for(var i = 0; i < elements.length; i++){
    elements[i].addEventListener("mouseover", on);
    elements[i].addEventListener("mouseout", none);
}

function on() {
    this.style.color = "#f84848";
}

function none() {
    this.style.color = "white";
}