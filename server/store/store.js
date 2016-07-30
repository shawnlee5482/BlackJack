/**
 * Created by 이성찬 on 2016-07-29.
 */
var redux = require('redux');

var initialState = {
  numberOfRoom: 0,
  rooms: []
}

// implement state transition logic
function reducer(state, action){
  // Create a newState variable that begins life as an empty object
  var newState = {}


  // Ask questions of action.type to decide how we're building the new state
  switch(action.type) {
    case "@@redux/INIT":
      console.log("This is the first time our reducer is running, and it's receiving this initialState: ", state);
      return state;

    case "PREPARING_GAME":
      return state;

    case "IN_GAME":
      return state;

    default:
      return state
  }
}

var store = redux.createStore(reducer, initialState);

module.exports = store;