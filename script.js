document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu");
    const menubtn = document.getElementById("img3");


    /*menubtn.addEventListener("click", function() {        //this is method 1 to make this function
        if (menu.textContent.trim() === ""){
            menu.style.opacity = "1";
        } else {
            menu.style.opacity = "0";
        }
    }) 

    menubtn.addEventListener("click", function() {      //this is method 2 to make this function
        menu.style.opacity = menu.style.opacity === "1" ? "0" : "1";
    });*/
    menubtn.addEventListener("click", function() {      //this is method 3 to make this function
        if (menu.style.opacity === "0"){
            menu.style.opacity = "1";
        } else {
            menu.style.opacity = "0";
        } 
    })
})