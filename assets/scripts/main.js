let navBtn = document.getElementsByClassName("nav-btn");
let navBar = document.getElementsByClassName("navbar");

if (window.innerWidth < 834) {
    navBar[0].classList.add("hide")
}

navBtn[0].onclick = ()=>{
    if (navBar[0].classList.contains("hide")) {
        navBar[0].classList.remove("hide")
        navBar[0].classList.add("show")
    }else{
        navBar[0].classList.remove("show")
        navBar[0].classList.add("hide")
    }
}