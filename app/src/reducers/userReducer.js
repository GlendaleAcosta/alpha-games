module.exports = function reducer(state={
    id: 1,
    first: 'Glendale',
    last: 'Acosta',
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_USER": {
        return Object.assign({}, state, {
            fetching: true
        })
      }
      case "FETCH_USER_REJECTED": {    
        return Object.assign({}, state, {
            fetching: false,
            error: action.payload
        })
      }
      case "FETCH_USER_FULFILLED": {
        return Object.assign({}, state, {
            fetching: false,
            fetched: true,
            user: action.payload
        })
      }
    }

    return state;
}
