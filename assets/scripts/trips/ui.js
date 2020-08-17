
'use strict'

const showTripTemplate = require('../templates/tripListing.handlebars')
const createTripTemplate = require('../templates/showTrip.handlebars')

const store = require('../store.js')

const showTripsSuccess = function (response) {
  console.log(response)
  store.user = response.user
  $('#class2-message').show()
  $('#class2-message').text('seccessfully listed')
  $('#faillure-message').hide()
  $('#content').show()
  $('#deleteSuccess').hide()
  const showTripsText = showTripTemplate({ trips: response.trips })
  $('#content').html(showTripsText)
}

const showTripsFailed = function (error) {
  console.log(error)
  $('#class2-message').show()
  $('#class2-message').text('Failed to show trips. Try again')
}

const createTripSuccess = function (response) {
  $('#create-trip').trigger('reset')
  $('#content').show()
  const showTripsText = createTripTemplate({ trip: response.trip })
  $('#content').html(showTripsText)
  $('form').trigger('reset')
  $('#class2-message').show()
  $('#class2-message').text('Successfully created')
}

const createTripFailed = function (error) {
  console.log(error)
  $('#create-trip').trigger('reset')
  $('#failur-message').show()
  $('#failure-message').text('Failed to create trip. Try again')
}

const deleteTripSuccess = function () {
  $('#content').hide()
  $('#deleteSuccess').show()
  $('#deleteSuccess').text('trip deleted')
}

const deleteTripFailed = function (error) {
  console.log(error)
  $('#class2-message').show()
  $('#class2-message').text('Failed to delete trip. Try again')
}

const updateTripSuccess = function (response) {
  console.log(response)
  $('#content').show()
  $('#class2-message').text('Trip Successfully updated!')
  $('#update-trip').trigger('reset')
}

const updateTripFailed = function (error) {
  console.log(error)
  $('#update-trip').trigger('reset')
  // $('#content').hide()
  $('#class2-message').show()
  $('#class2-message').text('Failed to update trip. Try again')
}

const showSingleTripSuccess = function (response) {
  $('#show-trip').trigger('reset')
  $('#content').show()
  const showTripText = createTripTemplate({ trip: response.trip })
  $('#content').text(showTripText)
  $('#class2-message').text('Successfully showed sigle trip')
}

const showSingleTripFailed = function (error) {
  console.log(error)
  $('#show-trip').trigger('reset')
  $('#class2-message').show()
  $('#class2-message').text('Could not show trip')
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
