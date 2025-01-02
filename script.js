const namee = document.querySelector('#nameinput')
const surname = document.querySelector('#surnameinput')
const number = document.querySelector('#numberinput')
const email = document.querySelector('#emailinput')
const form = document.querySelector('.box')
const wrapper = document.querySelector('.wrapper')

const namevalue = namee.value
const surnamevalue = surname.value
const numbervalue = number.value
const emailvalue = email.value

form.addEventListener('submit', e => {
    e.preventDefault()
    const contact = document.createElement('div')
    contact.textContent =` Имя: ${namee.value} Фамилия: ${surname.value} Телефон: ${number.value} Email: ${email.value}`
    contact.classList.add('newcontact')
    wrapper.appendChild(contact)
    const deletebutton = document.createElement('button')
    deletebutton.classList.add('deletebutton')
    deletebutton.textContent = 'Удалить'
    contact.appendChild(deletebutton)
    form.reset()
    deletebutton.addEventListener('click', e => {
        e.preventDefault()
        wrapper.removeChild(contact)
    })
})
