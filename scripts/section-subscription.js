const formEl = document.querySelector(".form-subscription")
const emailInputEl = document.getElementById("subscription-email")
const emailInputErrorEl = document.querySelector(".validation-error")
const successAlertEl = document.querySelector(".alert-subscription-success")
const userEmailEl = document.querySelector(".user-email")
const dismissButtonEl = document.querySelector(".button-dismiss")

// handle input validation
emailInputEl.addEventListener("invalid", (e) => {
 e.preventDefault()
 emailInputEl.classList.add("invalid")
 emailInputErrorEl.removeAttribute("hidden")

 emailInputEl.addEventListener("input", handleInput)
})

function handleInput(e) {
 if (emailInputEl.validity.valid) {
  emailInputEl.classList.remove("invalid")
  emailInputErrorEl.setAttribute("hidden", "")
 }
}

// handle submission
formEl.addEventListener("submit", (e) => {
 e.preventDefault()
 userEmailEl.textContent = e.target.elements["email"].value
 successAlertEl.showModal()
 e.target.reset()
})

// handle close alert
dismissButtonEl.addEventListener("click", (e) => {
 successAlertEl.close()
})