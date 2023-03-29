export function validation(input){
    const inputType = input.dataset.type;
    if (validators[inputType]){
        validators[inputType](input);
    }

    if(input.validity.valid){
        input.classList.remove("form__input--invalid")
        input.nextElementSibling.nextElementSibling.innerHTML ="";
    }else{
        input.classList.add("form__input--invalid")
        input.nextElementSibling.nextElementSibling.innerHTML = showError(inputType, input);
    }
}

const validators ={

}

const errorType = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
]

function showError(inputType, input){
    let message = "";

    errorType.forEach((error) => {
        if(input.validity[error]){
            message = errorMessage[inputType][error];
        }
    });

    return message;
}

const errorMessage ={
    email:{
        valueMissing: "Por favor, ingresa tu correo electrónico",
        typeMismatch: "El correo no es válido",
        patternMismatch: "El correo debe de tener la forma usuario@dominio.tipo"
    },

    password:{
        valueMissing: "Por favor, ingresa la contraseña",
        patternMismatch: "Este mensaje nunca debería de aparecer, así que L O L"
    },

}
