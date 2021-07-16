const navegar = document.getElementById("navegate")
navegar.onclick = function(e) {
    let filho = navegar.nextElementSibling
    console.dir(e)
    filho.classList.toggle("submenu--visible")
}
    