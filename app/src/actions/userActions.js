exports.fetchUser = function() {
  return {
    type: "FETCH_USER_FULFILLED",
    payload: {
      name: "Glendale"
    }
  }
}

exports.setUserName = function(name) {
  return {
    type: 'SET_USER_NAME',
    payload: name,
  }
}

exports.setUserAge = function(age) {
  return {
    type: 'SET_USER_AGE',
    payload: age,
  }
}
