'use strict'

const config = require('../config')
const store = require('../store')

const SignUp = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const SignIn = function (formData) {
  console.log(formData)
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

const ChangePassword = function (formData) {
  console.log(formData)
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    data: formData
  })
}

const SignOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  SignUp,
  SignIn,
  ChangePassword,
  SignOut
}
