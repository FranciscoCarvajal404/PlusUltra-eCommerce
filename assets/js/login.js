import { animateHeader } from "./components/animateHeader.js";
import { validation } from "./components/validaciones.js";
import maxlength from "./components/maxlength.js";
import putPattern from "./components/pattern.js"

window.addEventListener("scroll", animateHeader);

const inputs = document.querySelectorAll(".form__input");

/*Validaciones*/
inputs.forEach((input) =>{
    input.addEventListener("blur", (input) =>{
        validation(input.target);
    });

    /*Validacion submit*/
    const form = document.querySelector('.login__form');
    const submitBtn = form.querySelector('[type="submit"]');

    submitBtn.disabled = true;

    form.addEventListener('input', function () {
    submitBtn.disabled = !form.checkValidity();
})
});

/*Agregar atributos de forma dinamica*/
inputs.forEach((input) =>{
    input.addEventListener("focus", (input) =>{
        putPattern(input.target);
    });
});

inputs.forEach((input) =>{
    input.addEventListener("focus", (input) =>{
        maxlength(input.target);
    });
});

/*Animaciones*/
inputs.forEach(input => {
    input.addEventListener('blur', (event) => {
    if (event.target.value.length) {
        event.target.classList.add("full");
    } else {
        event.target.classList.remove("full");
    }
});
})