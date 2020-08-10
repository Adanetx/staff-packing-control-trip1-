'use strict'

const authEvents = require('./auth/events.js')

const tripEvents = require('./trips/events.js')

$(() => {
  $('#sign-up').hide()
  $('#change-password-button').hide()
  $('#sign-up-button')
  $('#class1-message').hide()
  $('#class2-message').hide()
  $('#class2').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassWord)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#sign-up-button').on('click', authEvents.showChangePassword)
  $('#sign-up-button').on('click', authEvents.onShowsignUp)
  tripEvents.addHandlers()
})
