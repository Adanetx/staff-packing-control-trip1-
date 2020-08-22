
'use strict'

const showTripTemplate = require('../templates/tripListing.handlebars')
const createTripTemplate = require('../templates/showTrip.handlebars')

const store = require('../store.js')

const showTripsSuccess = function (response) {
  console.log('the response is', response)
  // store.user = response.user
  $('#show-trip').hide()
  $('#update-trip').hide()
  $('#create-trips').hide()
  $('#pra').hide()
  $('#class2-message').show()
  $('#class2-message').text('current data in the database, if you do not see it blow, no data.')
  $('#faillure-message').hide()
  $('#content').show()
  $('#class1-message').hide()
  const showTripsText = showTripTemplate({ trips: response.trips })
  $('#content').html(showTripsText)
}

const showTripsFailed = function (error) {
  console.log(error)
  // ￼  $('#update-trip').hide()
  $('#show-trip').hide()
  $('#update-trip').hide()
  $('#create-trips').hide()
  $('#class1-message').hide()
  $('#pra').hide()
  $('#class2-message').show()
  $('#class2-message').text('Failed to show trips. Try again')
}

const createTripSuccess = function (response) {
  console.log(response)
  $('#class1-message').hide()
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
  console.log(error)
  $('#class1-message').hide()
  $('#pra').hide()
  console.log(error)
  $('#show-trips').show()
  $('#create-trips').trigger('reset')
  $('#class2-message').show()
  $('#class2-message').text('Failed to create trip. Try again')
}

const deleteTripSuccess = function () {
  console.log(store.user)
  $('#class1-message').hide()
  $('#pra').hide()
  $('#show-trips').click()
  // $('#class2-message').show()
  // $('#class2-message').hide()
  alert('trip deleted you will not have this again in  in the database')
  $('#content').show()
}

const deleteTripFailed = function (error) {
  console.log(error)
  $('#show-trips').click()
  $('#class1-message').hide()
  $('#pra').hide()
  $('#class2-message').show()
  $('#content').show()
  $('#class2-message').hide()
  alert('failed to delete')
}

const updateTripSuccess = function (response) {
  console.log(response)
  // $('#show-trips').show()
  $('#class1-message').hide()
  $('#pra').hide()
  // $('#content').hide()
  // $('#class2-message').
  alert('you have updated your trip information.')
  $('#update-trip').trigger('reset')
  $('#show-trips').click()
}

const updateTripFailed = function (error) {
  console.log(error)
  // $('#update-trip').hide()
  $('#create-trip').hide()
  $('#class1-message').hide()
  $('#pra').hide()
  $('#update-trip').trigger('reset')
  $('#content').hide()
  $('#class2-message').hide()
  // $('#class2-message').text('Failed to update trip. Try again')
  alert('update failed, try again')
}

const showSingleTripSuccess = function (response) {
  console.log(response)
  $('#class1-message').hide()
  $('#pra').hide()
  $('#show-trip').trigger('reset')
  const showTripText = createTripTemplate({ trip: response.trip })
  $('#content').html(showTripText)
  $('#class2-message').text('Successfully showed sigle trip')
  $('#content').show()
}

const showSingleTripFailed = function (error) {
  console.log(error)
  $('#class1-message').hide()
  $('#pra').hide()
  $('#show-trip').trigger('reset')
  $('#class2-message').hide()
  // $('#class2-message').text('Could not show trip')
  alert('please enter the correct Id')
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
