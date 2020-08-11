'use strict'

const store = require('../store.js')

const signUpSuccess = function (response) {
  $('#second-button').hide()
  $('#sign-out').hide()
  $('#class1-message').show()
  $('#class1-message').text('Sign Up Successful! Now sign in')
  // $('#sign-up-button').hide()
  // $('#class2-message').hide()
  $('#sign-up').hide()
  // $('#change-passwords-button').show()
  $('form').trigger('reset')
}

const signUpFailed = function (error) {
  $('#class1-mesage').show()
  $('#class1-message').text('Failed to Sign Up')
  $('#sign-up-button').hide()
  console.log(error)
  $('form').trigger('reset')
}
const signInSuccess = function (response) {
  console.log(response)
  store.user = response.user
  $('#second-button').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#first-button').show()
  $('.show-update-form').show()
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

const signInFailed = function (error) {
  $('#second-button').show()
  $('#class1-message').text('Failed to Sign In')

  console.log(error)
  $('form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#class2-message').show()
  $('#class2-message').text('You changed your password!')
}

const changePassWordFailed = function (error) {
  $('#class2-message').text('Failed to changed your password!')
  console.log(error)
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  store.user = null
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-in').show()
  $('.show-update-form').hide()
  $('.opencreation').hide()
  $('#first-button').hide()
  $('#class2-message').hide()
  $('#class2').hide()
  $('#class1-message').show()
  $('#class1-message').text('You signed out')
}

const signOutFailed = function (error) {
  $('#class1-message').text('Failed to sign out!')
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
