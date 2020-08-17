'use strict'

const store = require('../store.js')

const signUpSuccess = function (response) {
  $('#sign-out').hide()
  $('#second-button').show()

  $('#class1-message').show()
  $('#class1-message').text('Sign Up Successful! Now sign in')
  // $('#sign-up-button').hide()
  // $('#class2-message').hide()
  $('#sign-up').hide()
  // $('#change-passwords-button').show()
  $('form').trigger('reset')
}

const signUpFailed = function (error) {
  $('.sigle').hide()
  $('#class1-mesage').show()
  $('#class1-message').text('Failed to Sign Up')
  $('#sign-up-button').hide()
  console.log(error)
  $('form').trigger('reset')
}
const signInSuccess = function (response) {
  console.log(response)
  store.user = response.user

  $('.single').show()
  $('#show-trips').show()
  $('#sign-up').hide()
  $('#second-button').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#first-button').show()
  $('.shower').show()
  $('.opencreation').show()
  $('#change-password-button').hide()
  $('#content').hide()
  $('#class1-message').show()
  $('#class1-message').text('Sign In Successful!')
  // $('#class2').show()
  $('#class2-message').hide()
  $('form').trigger('reset')
  // $('#class1').hide()
}

const signInFailed = function () {
  $('.sigle').hide()
  $('#second-button').show()
  $('#class1-message').show()
  $('#class1-message').text('Failed to Sign In')

  // console.log(error)
  $('form').trigger('reset')
}

const changePasswordSuccess = function (response) {
  console.log(response)
  $('#class1-message').hide()
  $('.shower').hide()
  $('.opencreation').hide()
  $('#first-button').hide()
  $('#content').show()
  $('#show-trip').hide()
  $('#create-trips').hide()
  $('#class2-message').show()
  $('form').trigger('reset')
  $('#class2-message').text('You changed your password!')
}

const changePassWordFailed = function (error) {
  $('#class1-message').hide()
  $('#class2-message').show()
  $('#class2-message').text('change password fail!')
  console.log(error)
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  store.user = null
  $('#update-trip').hide()
  $('.single').hide()
  $('#class2').hide()
  $('#second-button').show()
  $('.opencreation').hide()
  $('.show-update-form').hide()
  $('#sign-in').show()
  $('#create-trips').hide()
  $('#show-trips').hide()
  $('#show-trip').hide()
  $('#content').hide()
  $('#failure-message').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('.shower').hide()
  $('.opencreation').hide()
  $('#first-button').hide()
  $('#class2-message').hide()
  // $('#class2').hide()
  $('#class1-message').show()
  $('#class1-message').text('You signed out')
}

const signOutFailed = function (error) {
  $('#class1-message').text('Failed to sign out!')
  $('#class2').hide()
  console.log(error)
}

module.exports = {
  signUpSuccess,
  signUpFailed,
  signInSuccess,
  signInFailed,
  changePasswordSuccess,
  changePassWordFailed,
  signOutSuccess,
  signOutFailed
}
