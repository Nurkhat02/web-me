let btnElement = document.querySelector(".btn");
let inputElement_name = document.querySelector(".input_Name");
let inputElement_Surename = document.querySelector(".input_Surename");
let resultElement = document.querySelector(".result")
btnElement.addEventListener("click", function(){
    resultElement.textContent = "Здравствуйте, " +  inputElement_name.value + " " + inputElement_Surename.value; 
})
