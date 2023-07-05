const subscribeBtn = document.getElementById("subscribeBtn"),
    subscriptionForm = document.querySelector("form"),
    emailId = document.getElementById("emailField"),
    errorMsgEl = document.querySelector(".errorMsg"),
    modal = document.querySelector(".modal-wrapper"),
    modal_email = document.querySelector(".emailId"),
    closeModalBtn = document.getElementById("closeModalBtn");

/* event listeners */
subscriptionForm.addEventListener("submit", (e) => {
    e.preventDefault()
    vaidateEmail()
})

closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("show")
    resetPage()
})


/* function declaration */
const vaidateEmail = () => {
    const email = emailId.value
    if (email.indexOf('@') >= 3) {
        if (email.includes('.')) {
            let afterdot = email.split('.')[1]
            if (afterdot.length >= 2 && !email.includes('#')) {
                showModal(email)
                subscriptionForm.reset()
            } else {
                showError("should have something after .")
            }
        } else {
            showError(". is in worng position")
        }
    } else
        showError("@ is in wrong position")
}

let errorTimeout
function showError(msg) {
    errorMsgEl.innerText = msg
    errorMsgEl.classList.add("show")

    emailId.style.borderColor = "rgba(240,0,0,0.4)"
    errorTimeout = setTimeout(hideError, 4000)
}

function hideError() {
    emailId.style.borderColor = ""
    clearTimeout(errorTimeout)
    errorMsgEl.classList.remove("show")
}

function showModal(emailReg) {
    document.querySelector("main").addEventListener("transitionend", () => {
        document.querySelector("main").style.display = "none"

        modal.classList.add("show")
        modal_email.innerHTML = emailReg
    })
    document.querySelector("main").classList.add("hide")

}
function resetPage() {
    document.querySelector("main").style.display = "flex"
    document.querySelector("main").classList.remove("hide")
}