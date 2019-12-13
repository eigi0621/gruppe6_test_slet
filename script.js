window.addEventListener("load", start);

function start() {
    console.log("Siden vises");

    document.querySelector("#menuknap").addEventListener("click", visMenu);
}

function visMenu() {
    console.log("visMenu");

    document.querySelector("#menu").classList.toggle("hidden");
}
