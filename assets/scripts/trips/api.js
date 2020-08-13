'use strict'

const config = require('../config.js')

const store = require('../store.js')

const showTrips = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/trips',
    method: 'GET'
  })
}

const createTrip = function (formData) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/trips',
    method: 'POST',
    data: formData
  })
}

const deleteTrip = function (tripId) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/trips/' + tripId,
    method: 'DELETE'
  })
}

const updateTrip = function (formData) {
  const tripId = formData.trip._id
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/trips/' + tripId,
    method: 'PATCH',
    data: formData
  })
}

const showSingleTrip = function (req) {
  const tripId = req.trip._id
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/trips/' + tripId,
    method: 'GET'
  })
}

module.exports = {
  showTrips,
  createTrip,
  deleteTrip,
  updateTrip,
  showSingleTrip
}
