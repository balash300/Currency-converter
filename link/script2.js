let form = document.querySelector("form");
let userName = document.querySelector("#username");
let gender = document.querySelector("select");
let age = document.querySelector("#number");
let email = document.querySelector("#email");
let phoneNumber = document.querySelector("#phone-number");
let text = document.querySelector("textarea");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let p = document.querySelector("p");
    p.innerText = "You are registered";

    console.log(userName.value);
    console.log(gender.value);
    console.log(age.value);
    console.log(email.value);
    console.log(phoneNumber.value);
    console.log(text.value);
})