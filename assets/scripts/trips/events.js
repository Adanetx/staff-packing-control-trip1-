'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')

// const store = require('../store.js')

const api = require('./api.js')

const ui = require('./ui.js')

const onShowTrips = function (event) {
  event.preventDefault()
  api.showTrips()
    .then(ui.showTripsSuccess)
    .catch(ui.showTripsFailed)
}

const onCreateTrip = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createTrip(formData)
    .then(ui.createTripSuccess)
    .catch(ui.createTripFailed)
}

const onDeleteTrip = function (event) {
  event.preventDefault()
  const tripId = $(event.target).data('id')
  api.deleteTrip(tripId)
    .then(ui.deleteTripSuccess)
    .catch(ui.deleteTripFailed)
}

const onUpdateTrip = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateTrip(formData)
    .then(ui.updateTripSuccess)
    .catch(ui.updateTripFailed)
}

const onShowSingleTrip = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.showSingleTrip(formData)
    .then(ui.showSingleTripSuccess)
    .catch(ui.showSingleTripFailed)
}
const onShowCreatForm = function (event) {
  event.preventDefault()
  $('#create-trips').show()
  $('#update-trip').hide()
  $('#show-trip').hide()
  $('#show-trips').show()
  $('#class1-message').hide()
}
const onShowUpdateForm = function (event) {
  event.preventDefault()
  $('#update-trip').show()
  $('#create-trips').hide()
  $('#show-trip').hide()
  $('#class1-message').hide()
}
const onsingle = function (event) {
  event.preventDefault()
  $('#show-trip').show()
  $('#create-trips').hide()
  $('#update-trip').hide()
  $('#class1-message').hide()
}

const addHandlers = () => {
  $('#show-trips').on('click', onShowTrips)
  $('#create-trips').on('submit', onCreateTrip)
  $('#content').on('click', '.btn-danger', onDeleteTrip)
  $('#update-trip').on('submit', onUpdateTrip)
  $('#show-trip').on('submit', onShowSingleTrip)
  $('.opencreation').on('click', onShowCreatForm)
  $('.shower').on('click', onShowUpdateForm)
  $('.single').on('click', onsingle)
}
module.exports = {
  addHandlers
}
