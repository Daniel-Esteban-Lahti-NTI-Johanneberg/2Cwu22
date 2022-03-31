document.querySelector(".dropDownMenu").addEventListener("click",showDropMenu);

document.querySelector("#dropDownIcon").addEventListener("click",iconAnimation);
document.querySelector("#dropDownIcon").addEventListener("click",showDropMenu);

function showDropMenu(){
    let dropMenu = document.querySelector(".dropDownMenu");
    dropMenu.classList.toggle("show");
}

function iconAnimation(){
    dropDownIcon.classList.toggle("open");
}
