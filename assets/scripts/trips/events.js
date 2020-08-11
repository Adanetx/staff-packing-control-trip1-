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
}
const onShowUpdateForm = function (event) {
  event.preventDefault()
  $('#update-trip').show()
}

const addHandlers = () => {
  $('#show-trips').on('click', onShowTrips)
  $('#create-trips').on('submit', onCreateTrip)
  $('#content').on('click', '.btn-danger', onDeleteTrip)
  $('#update-trip').on('submit', onUpdateTrip)
  $('#show-trip').on('submit', onShowSingleTrip)
  $('.opencreation').on('click', onShowCreatForm)
  $('.show-update-form').on('click', onShowUpdateForm)
}
module.exports = {
  addHandlers
}
