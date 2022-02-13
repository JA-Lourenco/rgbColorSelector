const button = document.getElementById("rgb-button");
let color = document.getElementById("color-rgb");
let input = document.querySelector("input");
let css = document.getElementById("css");

button.addEventListener("click", setColor)

function setColor() {
    
    let red = document.querySelector(".red").value;
    let green = document.querySelector(".green").value;
    let blue = document.querySelector(".blue").value;

    if (red == "" || green == "" || blue == "") {
        alert(`
        Red, green or blue value is missing!
        Be sure to insert the 3 RGB values before displaying the color.`
        );
    }
    else {
        color.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

        css.innerText = `rgb(${red}, ${green}, ${blue});`;
    }
}