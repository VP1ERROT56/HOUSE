document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("burgers").addEventListener("click", function () {
        document.querySelector("header").classList.toggle("open")
    })
})