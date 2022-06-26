const inputs = document.querySelectorAll(".input");
const button = document.querySelector(".login_button");

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling; // chega no irmao anterio do input
    span.classList.add("span-active");
}

const handleFocusOut = ({ target }) => {

    if(target.value === "") {
        const span = target.previousElementSibling
        span.classList.remove("span-active");
    }
}

const handleChange = () => {
    const [username, password] = inputs;

    if(username.value && password.value.length >= 8) {
      
    button.removeAttribute("disabled");
    } 
    else {
    return button.setAttribute("disabled", "");
    }
    
}

inputs.forEach((input) => {
    input.addEventListener("focus", handleFocus)
    
});

inputs.forEach((input) => {
    input.addEventListener("focusout", handleFocusOut)
    
});

inputs.forEach((input) => {
    input.addEventListener("input", handleChange)
    
});