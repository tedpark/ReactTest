var React = require('react');

var Home = React.createClass({

  render: function() {

    return (
      <div class="navbar navbar-default navbar-static-top" ng-controller="NavbarCtrl">
        <div class="container">
          <div class="navbar-header">
            <button class="navbar-toggle" type="button" ng-click="isCollapsed = !isCollapsed">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a href="/" class="navbar-brand">CommitCareer</a>
          </div>
      </div>
    </div>
    );
  }
});

module.exports = Home;
