const email = document.getElementById("email")
const token = "1c68455c-7902-409c-a082-fc9e5b5c1068"
const button = document.getElementsByTagName("button")
let messageg = ""
const div = document.querySelector("#checbox")

const empty_check = (input) => {
    if (input.value.length === 0) {
        input.style.backgroundColor = "red"
        return false
    } else {
        input.style.backgroundColor = "green"
        return true
    }
}

const getChekboxValue = (div, radioButton) => {
         if (radioButton === null) { return false}
         else if (radioButton.value === "man") { div.style.backgroundColor = "steelblue"; messageg = "Szanowny Panie"; return true}
         else if (radioButton.value === "women" && radioButton.checked) { div.style.backgroundColor = "hotpink"; messageg = "Szanowna Pani"; return true }
         else if (radioButton.value === "other" && radioButton.checked) { div.style.backgroundColor = "indigo"; messageg = "Witam cosiu"; return true }
         else return false
}

const wyslij_zapytanie = (e) => {
    e.preventDefault()
    if (empty_check(email)) {
        const radioButton = document.querySelector("input[type='radio']:checked")
        const checkbox = document.querySelector("#checkbox")
        if (getChekboxValue(div, radioButton)) {
            if (checkbox.checked) {
                Email.send({
                    SecureToken : token,
                    To : email.value,
                    From : "alakotola@wp.pl",
                    Subject : "This is the subject",
                    Body : messageg
                }).then(
                  message => alert(message)
                );
            } else {alert("Udowodnij, żeś nie robot!")}
        } else {alert("Proszę wybrać płeć!")}
    }
}

button[0].addEventListener("click", (e) => {
    wyslij_zapytanie(e)
})