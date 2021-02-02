const container=document.querySelector(".customers")
const customer=customers[0]
console.log("customer image", customer.picture.thumbnail)
console.log("customer name is" , customer.name)
console.log("customer email is", customer.email)
console.log("customer phone is", customer.phone)
console.log("sutomer address is", customer.location)
console.log("customer birthday is", customer.dob)
console.log("customer registered ", customer.registered)

// const customerImg= document.createElement("img")
// customerImg.src= customer.picture.thumbnail; url ="https://randomuser.me/api/portraits/thumb/women/62.jpg"
// container.appendChild (customerImg)

// const customerName= document.createElement("h3")
// customerName.innerText=`${customer.name.first} ${customer.name.last}`
// container.appendChild (customerName)

// const customerEmail= document.createElement("h4")
// customerEmail.innerText= customer.email
// container.appendChild (customerEmail)

// const customerPhone= document.createElement("h4")
// customerPhone.innerText= customer.phone
// container.appendChild (customerPhone)

// const customerAddress= document.createElement("h4")
// customerAddress.innerText=`${customer.location.street.number} ${customer.location.street.name} 
// ${customer.location.city}, ${customer.location.state} ${customer.location.postcode}`
// container.appendChild (customerAddress)

// const customerBirthDate= document.createElement("h4")
// customerBirthDate.innerText= customer.dob.date
// container.appendChild (customerBirthDate)

// const customerSinceDate= document.createElement("h4")
// customerSinceDate.innerText= customer.registered.date
// container.appendChild (customerSinceDate)



for (let customer of customers) {
    const customerImg= document.createElement("img")
    customerImg.src= customer.picture.thumbnail //; url ="https://randomuser.me/api/portraits/thumb/women/62.jpg"
    container.appendChild (customerImg)

    const customerName= document.createElement("h3")
    customerName.innerText=`${customer.name.first} ${customer.name.last}`
    container.appendChild (customerName)

    const customerEmail= document.createElement("h4")
    customerEmail.innerText= customer.email
    container.appendChild (customerEmail)

    const customerPhone= document.createElement("h4")
    customerPhone.innerText= customer.phone
    container.appendChild (customerPhone)

    const customerAddress= document.createElement("h4")
    customerAddress.innerText=`${customer.location.street.number} ${customer.location.street.name} 
    ${customer.location.city}, ${nameToAbbr(customer.location.state)} ${customer.location.postcode}`
    container.appendChild (customerAddress)

    const customerBirthDate= document.createElement("h4")
    customerBirthDate.innerText= customer.dob.date
    container.appendChild (customerBirthDate)

    const customerSinceDate= document.createElement("h4")
    customerSinceDate.innerText= customer.registered.date
    container.appendChild (customerSinceDate)
}