export default putPattern;

function putPattern(input){
    const inputType = input.dataset.type;
    if (validators[inputType]){
        validators[inputType](input);
    }
    const reg = regex[inputType];
    input.setAttribute("pattern", reg)
}

const validators ={

}

const regex = {

    email: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}",
    password: ".*"

}