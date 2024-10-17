const input = document.querySelector('input');

const lowerCaseOutput = document.querySelector('#lowercase span');
const upperCaseOutput = document.querySelector('#uppercase span');
const camelCaseOutput = document.querySelector('#camelcase span');
const pascalCaseOutput = document.querySelector('#pascalcase span');
const snakeCaseOutput = document.querySelector('#snakecase span');
const kebabCaseOutput = document.querySelector('#kebabcase span');
const trimOutput = document.querySelector('#trim span');


function capitlizeString(str) {
    if (!str) return;
    return str[0].toUpperCase() + str.substring(1);
}

function camelCase(str) {
    let word = str.toLowerCase().split(" ").map((el, i) => {
        if (i !== 0) return capitlizeString(el);
        return el;
    });
    return word.join(" ");
}

function pascalCase(str) {
    return str.toLowerCase().split(" ").map(el => capitlizeString(el)).join(" ");
}

input.addEventListener("input", updatedText);

function updatedText() {
    lowerCaseOutput.innerText = input.value.toLowerCase();
    upperCaseOutput.innerText = input.value.toUpperCase();
    camelCaseOutput.innerText = camelCase(input.value.trim());
    pascalCaseOutput.innerText = pascalCase(input.value.trim());
    snakeCaseOutput.innerText = input.value.trim().replaceAll(" ", "_");
    kebabCaseOutput.innerText = input.value.trim().replaceAll(" ", "-");
    trimOutput.innerText = input.value.trim().replaceAll(" ", "");
}

updatedText();