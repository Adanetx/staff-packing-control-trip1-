'use strict'

const store = require('../store.js')

const signUpSuccess = function (response) {
  $('#class1-message').show()
  $('#class1-message').text('Sign Up Successful! Now sign in')
  $('#sign-up-button').show()
  $('#class2-message').hide()
  $('#sign-up').hide()
  $('#sign-out').show()

  $('#sign-up-button').hide()
  $('#change-password-button').show()
  $('form').trigger('reset')
}

const signUpFailed = function (error) {
  $('#class1-message').text('Failed to Sign Up')
  $('#sign-up-button').hide()
  console.log(error)
  $('form').trigger('reset')
}
const signInSuccess = function (response) {
  console.log(response)
  store.user = response.user
  $('#content').hide()
  $('#class1-message').show()
  $('#class1-message').text('Sign In Successful!')
  $('#class2').show()
  $('#class2-message').hide()
  $('form').trigger('reset')
  $('#class1').hide()
}

const signInFailed = function (error) {
  $('#class1-message').text('Failed to Sign In')
  console.log(error)
}

const changePasswordSuccess = function () {
  $('#class2-message').show()
  $('#class2-message').text('You changed your password!')
}

const changePassWordFailed = function (error) {
  $('#class2-message').text('Failed to changed your password!')
  console.log(error)
}

const signOutSuccess = function () {
  $('#class2-message').hide()
  $('#class2').hide()
  $('#class2').show()
  $('#class1-message').show()
  $('#class1-message').text('You signed out')
  $('form').trigger('reset')
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
