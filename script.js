const gradientContainer = document.querySelector('#gradient-container');
const gradient = document.querySelector('#gradient');
const generateBtn = document.querySelector('#generate-btn');
const code = document.querySelector('#code')
code.textContent = "click here to copy code"

function generateRandomHexColor() {
    const hex = Math.floor(Math.random()*16777215).toString(16);
    return "#" + hex.padEnd(6, "0");
}

function generateGradient() {
    const color1 = generateRandomHexColor();
    const color2 = generateRandomHexColor();
    const color = `linear-gradient(to right, ${color1}, ${color2})`;
    code.textContent = color
    gradient.style.background =  color
}

generateBtn.addEventListener('click', generateGradient);

document.querySelector('#code').addEventListener('click', function(event) {
    var text = event.target.innerText;
    var elem = document.createElement('textarea');
    elem.value = text;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
});

