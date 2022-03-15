document.querySelector("#fadeLayer").addEventListener("click",showDropMenu);

document.querySelector(".dropDownMenu").addEventListener("click",showDropMenu);

document.querySelector("#dropDownIcon").addEventListener("click",iconAnimation);
document.querySelector("#dropDownIcon").addEventListener("click",showDropMenu);



function showDropMenu(){
    let dropMenu = document.querySelector(".dropDownMenu");
    dropMenu.classList.toggle("show");

    let fadeLayer = document.querySelector("fadeLayer");
    fadeLayer.classList.toggle("visible");
}

function iconAnimation(){
    dropDownIcon.classList.toggle("open");
}