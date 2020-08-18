
'use strict'

const showTripTemplate = require('../templates/tripListing.handlebars')
const createTripTemplate = require('../templates/showTrip.handlebars')

const store = require('../store.js')

const showTripsSuccess = function (response) {
  console.log('the response is', response)
  // store.user = response.user
  $('#pra').hide()
  $('#class2-message').show()
  $('#class2-message').text('seccessfully listed')
  $('#faillure-message').hide()
  $('#content').show()
  const showTripsText = showTripTemplate({ trips: response.trips })
  $('#content').html(showTripsText)
}

const showTripsFailed = function (error) {
  console.log(error)
  $('#pra').hide()
  $('#class2-message').show()
  $('#class2-message').text('Failed to show trips. Try again')
}

const createTripSuccess = function (response) {
  $('#pra').hide()
  $('#content').show()
  $('#show-trips').show()
  const showTripsText = createTripTemplate({ trip: response.trip })
  $('#content').html(showTripsText)
  $('#class2-message').show()
  $('#class2-message').html('Successfully created')
  $('form').trigger('reset')
}

const createTripFailed = function (error) {
  $('#pra').hide()
  console.log(error)
  $('#show-trips').show()
  $('#create-trip').trigger('reset')
  $('#class2-message').show()
  $('#class2-message').text('Failed to create trip. Try again')
}

const deleteTripSuccess = function () {
  $('#pra').hide()
  $('#content').hide()
  // $('#deleteSuccess').hide()
  $('#class2-message').show()
  $('#class2-message').text('trip deleted')
}

const deleteTripFailed = function (error) {
  console.log(error)
  $('#pra').hide()
  $('#class2-message').show()
  $('#class2-message').text('Failed to delete trip. Try again')
}

const updateTripSuccess = function (response) {
  console.log(response)
  // $('#show-trips').show()
  $('#pra').hide()
  $('#content').show()

  $('#class2-message').text('Trip Successfully updated!')
  $('#update-trip').trigger('reset')
}

const updateTripFailed = function (error) {
  console.log(error)
  $('#pra').hide()
  $('#update-trip').trigger('reset')
  $('#content').hide()
  $('#class2-message').show()
  $('#class2-message').text('Failed to update trip. Try again')
}

const showSingleTripSuccess = function (response) {
  console.log(response)
  $('#pra').hide()
  $('#show-trip').trigger('reset')
  $('#content').show()
  const showTripText = createTripTemplate({ trip: response.trip })
  $('#content').html(showTripText)
  $('#class2-message').text('Successfully showed sigle trip')
}

const showSingleTripFailed = function (error) {
  console.log(error)
  $('#pra').hide()
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
