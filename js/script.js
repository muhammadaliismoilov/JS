const elForm = document.querySelector(".formas")
const elInputname = document.querySelector(".input-name")
const elInput = document.querySelector(".input")
const elInputnumber = document.querySelector(".input-number")
const elContact = document.querySelector(".contact-header")
const elContactbox = document.querySelector(".contact-box")


const todos = [];
elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

    const name = elInputname.value
    const relati = elInput.value
    const number = elInputnumber.value


    const object ={
        firstName:name,
        relationship:relati,
        userNumber:number,

    }
    todos.push(object)

        elInputname.value = null
        elInput.value = null
        elInputnumber.value = null

        elContactbox.innerHTML = null
        // newDiv.value = null
        for(let index of todos){

            let newDiv = document.createElement("div")
            let newH3 = document.createElement("h3")
            let newH4 = document.createElement("h4")
            let newH5 = document.createElement("h5")

            newH3.textContent = `${index.firstName}`
            newH4.textContent = `${index.relationship}`
            newH5.textContent = `${index.userNumber}`

            newDiv.appendChild(newH3)
            newDiv.appendChild(newH4)
            newDiv.appendChild(newH5)

            elContactbox.appendChild(newDiv)

            newDiv.style.border = "1px solid black"
            newDiv.style.borderRadius = "15px"
            newDiv.style.paddingRight = "200px"
            newDiv.style.paddingLeft = "20px"
            newDiv.style.marginLeft = "100px"
            newH3.style.fontSize = "36px"
            elContact.style.textCenter = "auto"

        }



});
