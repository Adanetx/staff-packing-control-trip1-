
'use strict'

const showTripTemplate = require('../templates/tripListing.handlebars')
const createTripTemplate = require('../templates/showTrip.handlebars')

const store = require('../store.js')

const showTripsSuccess = function (response) {
  console.log(response)
  store.user = response.user
  $('#faillure-message').hide()
  $('#content').show()
  $('#deleteSuccess').hide()
  const showTripsText = showTripTemplate({ trips: response.trips })
  $('#content').html(showTripsText)
}

const showTripsFailed = function (error) {
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
  $('form').trigger('reset')
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
  console.log(response)
  $('#failure-message').hide()
  $('#content').show()
  $('#class2-message').text('Trip Successfully updated!')
  $('#update-trip').trigger('reset')
}

const updateTripFailed = function (error) {
  console.log(error)
  $('#update-trip').trigger('reset')
  $('#failure-message').show()
  // $('#content').hide()
  $('#failure-message').text('Failed to update trip. Try again')
}

const showSingleTripSuccess = function (response) {
  $('#failure-message').hide()
  $('#show-trip').trigger('reset')
  $('#content').show()
  const showTripText = createTripTemplate({ trip: response.trip })
  $('#content').text(showTripText)
}

const showSingleTripFailed = function (error) {
  console.log(error)
  $('#show-trip').trigger('reset')
  $('#failure-message').show()
  $('#failure-message').text('Could not show trip')
}

module.exports = {
  showTripsSuccess,
  showTripsFailed,
  createTripSuccess,
  createTripFailed,
  deleteTripSuccess,
  deleteTripFailed,
  updateTripSuccess,
  updateTripFailed,
  showSingleTripSuccess,
  showSingleTripFailed
}
