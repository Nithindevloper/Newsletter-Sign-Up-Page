// Newsletter Sign Up Front Page 
let formElement = document.getElementById("subscribeId");
// email Input section
let emailValidElement = document.getElementById("emailValid");
// Error Message
let errorMsgElement = document.getElementById("errorMsg");
// Newsletter Sign Up Subscribe button
let subscribeBtnElement = document.getElementById("subscribeBtn");

let signupPageElement = document.getElementById("signupPage")


// success From
let thankyouIdElement = document.getElementById("thankyouId");
// Thank you Page dismiss button
let dismissElement = document.getElementById("dismissBtn");
// Thank you page user email text shown section
let submittedEmailElement = document.getElementById("submittedEmail");

thankyouIdElement.classList.add("hide")
errorMsgElement.classList.add("hide")
signupPageElement.classList.remove("hide")

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let email = emailValidElement.value
    if (!email === emailValidElement.value.includes("@gmail.com") || email === "") {
        errorMsgElement.classList.remove("hide")
        errorMsgElement.classList.add("error-message")
        emailValidElement.classList.add("error")
        emailValidElement.style.backgroundColor = "#ffe2e0"
    }
    else {
        submittedEmailElement.textContent = email;
        submittedEmailElement.style.fontSize = "23px"
        submittedEmailElement.style.color = "#ff6257"
        submittedEmailElement.style.fontWeight = "bold"

        signupPageElement.classList.add("hide");
        thankyouIdElement.classList.remove("hide");
        errorMsgElement.classList.add("hide");
    }

});


dismissElement.addEventListener("click", () => {
    signupPageElement.classList.remove("hide");
    thankyouIdElement.classList.add("hide");
    submittedEmailElement.textContent = "";
    window.location.reload();
});
