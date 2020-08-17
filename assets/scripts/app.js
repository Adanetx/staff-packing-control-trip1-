'use strict'

const authEvents = require('./auth/events.js')

const tripEvents = require('./trips/events.js')

$(() => {
  $('#update-trip').hide()
  $('.single').hide()
  $('#deleteSuccess').hide()
  $('#update-trip').hide()
  $('#show-trips').hide()
  // $('#failire-message').hide(
  // $('#xs').hide()
  $('#content').show()
  $('#show-trip').hide()
  $('#create-trips').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('.shower').hide()
  $('.opencreation').hide()
  $('#sign-up').hide()
  $('#first-button').hide()
  $('#class1-message').hide()
  $('#class2-message').hide()

  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassWord)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#first-button').on('click', authEvents.showChangePassword)
  $('#second-button').on('click', authEvents.onShowsignUp)
  tripEvents.addHandlers()
})
