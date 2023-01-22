const username = document.getElementById('username');
const password = document.getElementById('password');
const zipcode = document.getElementById('zipcode');
const email = document.getElementById('email');
const fullName = document.getElementById('fullName');
const form = document.getElementById('form');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');
const nameError = document.getElementById('nameError');
const zipcodeError = document.getElementById('zipcodeError');
const emailError = document.getElementById('emailError')

form.addEventListener('submit', (e) => {
    // username
    let usernameErrorMessage = ''
    if (username.value != '' && (username.value.length < 5 || username.value.length > 12)) {
        usernameErrorMessage += 'Username needs to be between 5-12 characters long.'
    }
    if (username.value == '') {
        usernameErrorMessage = 'This field is required.'
    }
    if (usernameErrorMessage.length > 0) {
        usernameError.innerText = usernameErrorMessage
        e.preventDefault()
    } else {
        usernameError.innerText = 'Looks good!'
    }

    // password
    let passwordErrorMessage = ''
    if (password.value == '' || password.value == null) {
        passwordError.innerText = 'This field is required.'
        e.preventDefault()
    }
    if (password.value != '' && password.value.length < 12) {
        passwordErrorMessage += 'Password needs to have more than 12 characters.'
    }
    if (password.value == '') {
        passwordErrorMessage = 'This is a required field.'
    }
    if (passwordErrorMessage.length > 0) {
        passwordError.innerText = passwordErrorMessage
        e.preventDefault()
    } else {
        passwordError.innerText = 'Looks good!'
    }

    // Full Name
    let fullNameErrorMessage = ''
    if (fullName.value != '' && /^[a-zA-Z\s]*$/.test(fullName.value)) {
        fullNameErrorMessage += 'Please enter only letters.'
    }
    if (fullName.value == '') {
        fullNameErrorMessage = 'This field is required.'
    }
    if (fullNameErrorMessage.length > 0) {
        fullNameError.innerText = fullNameErrorMessage
        e.preventDefault()
    } else {
        fullNameError.innerText = 'Looks good!'
    }

    // zip code
    let zipcodeErrorMessage = ''
    if (zipcode.value != '' && !/^([0-9]{4}[A-Za-z]{2})$/.test(zipcode.value)) {
        zipcodeErrorMessage += 'Please enter the zipcode in the following format: 1234AB'
    }
    if (zipcode.value == '') {
        zipcodeErrorMessage = 'This is a required field.'
    }
    if (zipcodeErrorMessage.length > 0) {
        zipcodeError.innerText = zipcodeErrorMessage
        e.preventDefault()
    } else {
        zipcodeError.innerText = 'Looks good!'
    }

    // e-mail
    let emailErrorMessage = ''
    if (email.value != '' && !/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/.test(email.value)) {
        emailErrorMessage += 'Please enter a valid email address.'
    }
    if (email.value == '') {
        emailErrorMessage = 'This is a required field.'
    }
    if (emailErrorMessage.length > 0) {
        emailError.innerText = emailErrorMessage
        e.preventDefault()
    } else {
        emailError.innerText = 'Looks good!'
    }

    // alert box
})