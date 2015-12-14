var Reflux = require('reflux');

var data = [];

var UserStore = Reflux.createStore({

  init: function() {
    console.log('UserStore initialized');
    // This funciton will be called when the store will be first initialized
  }

});

module.exports = UserStore;
