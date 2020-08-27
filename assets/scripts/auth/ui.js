
const store = require('./../store')

const onSignUpSuccess = function (response) {
  console.log('response is', response)
  $('#message').text('Thanks for signing up ' + response.user.email + ' !')
  $('#sign-up-form').trigger('reset')
}

const onSignUpFailure = function (error) {
  console.log('error is', error)
  $('#message').text('Sign up failed. Try again!')
}

const onSignInSuccess = function (response) {
  console.log('response is', response)
  store.user = response.user
  $('#message').text('Thanks for signing in ' + response.user.email)
  $('#sign-in-form').trigger('reset')
  // $('#change-password-form').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
}

const onSignInFailure = function (error) {
  console.log('error is', error)
  $('#message').text('Sign in failed. Try again!')
}

module.exports = {
  onSignUpSuccess: onSignUpSuccess,
  onSignUpFailure: onSignUpFailure,
  onSignInSuccess: onSignInSuccess,
  onSignInFailure: onSignInFailure
}