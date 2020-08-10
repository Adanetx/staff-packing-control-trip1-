
'use strict'

const showTripTemplate = require('../templates/tripListing.handlebars')
const createTripTemplate = require('../templates/showTrip.handlebars')

const store = require('../store.js')

const showTripsSuccess = function (response) {
  store.user = response.user
  $('#faillure-message').hide()
  $('#content').show()
  $('#deleteSuccess').hide()
  const showTripText = showTripTemplate({ Trips: response.Tripss })
  $('#content').html(showTripText)
}

const showTripFailed = function (error) {
  console.log(error)
  $('#failure-message').show()
  $('#failure-message').text('Failed to show trips. Try again')
}

const createTripSuccess = function (response) {
  $('#faillure-message').hide()
  $('#create-trip').trigger('reset')
  $('#content').show()
  const showTripsText = createTripTemplate({ trip: response.trip })
  $('#content').html(showTripsText)
}

const createTripFailed = function (error) {
  console.log(error)
  $('#create-trip').trigger('reset')
  $('#failur-message').show()
  $('#failure-message').text('Failed to create trip. Try again')
}

const deleteTripSuccess = function () {
  $('#failure-message').hide()
  $('#content').hide()
  $('#deleteSuccess').show()
  $('#deleteSuccess').text('trip deleted')
}

const deleteTripFailed = function (error) {
  console.log(error)
  $('#failure-message').show()
  $('#failure-message').text('Failed to delete trip. Try again')
}

const updateTripSuccess = function (response) {
  $('#failure-message').hide()
  $('#content').text('Trip Successfully updated!')
  $('#update-trip').trigger('reset')
}

const updateTripFailed = function (error) {
  console.log(error)
  $('#update-trip').trigger('reset')
  $('#failure-message').show()
  $('#failure-message').text('Failed to update trip. Try again')
}

const showSingleTripSuccess = function (response) {
  $('#failure-message').hide()
  $('#show-trip').trigger('reset')
  $('#content').show()
  const showTripText = createTripTemplate({ trip: response.trip })
  $('#content').html(showTripText)
}

const showSingleTripFailed = function (error) {
  console.log(error)
  $('#show-trip').trigger('reset')
  $('#failure-message').show()
  $('#failure-message').text('Could not show trip')
}

module.exports = {
  showTripsSuccess,
  showTripFailed,
  createTripSuccess,
  createTripFailed,
  deleteTripSuccess,
  deleteTripFailed,
  updateTripSuccess,
  updateTripFailed,
  showSingleTripSuccess,
  showSingleTripFailed
}
