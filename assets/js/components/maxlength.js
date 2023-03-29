function maxlength(input){
    const inputType = input.dataset.type;
    if (validators[inputType]){
        validators[inputType](input);
    }
    const leng = lenght[inputType];
    input.setAttribute("maxlength", leng)
    input.setAttribute("required", "")
}
    

const validators ={

}

const lenght = {
    email: "60",
    password: "15",
}

export default maxlength;