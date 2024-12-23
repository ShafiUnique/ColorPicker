let containerChangerEl = document.getElementById("containerChanger");
let selectedColorHexCodeEl = document.getElementById("selectedColorHexCode");

function grey() {
    containerChangerEl.style.backgroundColor = "#e0e0e0";
    selectedColorHexCodeEl.textContent = "#e0e0e0";
}

function green() {
    containerChangerEl.style.backgroundColor = "#6fcf97";
    selectedColorHexCodeEl.textContent = "#6fcf97";
}

function blue() {
    containerChangerEl.style.backgroundColor = "#56ccf2";
    selectedColorHexCodeEl.textContent = "#56ccf2";
}

function pink() {
    containerChangerEl.style.backgroundColor = "#bb6bd9";
    selectedColorHexCodeEl.textContent = "#bb6bd9";
}