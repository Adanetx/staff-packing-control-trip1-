'use strict'

// gets user input data
const getFormFields = require('../../../lib/get-form-fields.js')

// makes ajax requests
const api = require('./api.js')

const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  console.log(formData)
  api.SignUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailed)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.SignIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailed)
}

const onChangePassWord = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.ChangePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePassWordFailed)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.SignOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailed)
}
const showChangePassword = function (event) {
  event.preventDefault()
  $('#change-password').show()
}

const onShowsignUp = function (event) {
  event.preventDefault()
  $('#sign-up').show()
}

module.exports = {
  onSignUp,
  onChangePassWord,
  onSignOut,
  onSignIn,
  showChangePassword,
  onShowsignUp
}
