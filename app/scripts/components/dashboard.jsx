var React = require('react');

var Router = require('react-router')
    , RouteHandler = Router.RouteHandler
    , Route = Router.Route;

var ReactBootstrap = require('react-bootstrap')
    , Nav = ReactBootstrap.Nav
    , Navbar = ReactBootstrap.Navbar
    , NavItem = ReactBootstrap.NavItem
    , ButtonToolbar = ReactBootstrap.ButtonToolbar
    , Button = ReactBootstrap.Button
    , DropdownButton = ReactBootstrap.DropdownButton
    , MenuItem = ReactBootstrap.MenuItem
    , Jumbotron = ReactBootstrap.Jumbotron
    , Row = ReactBootstrap.Row
    , Col = ReactBootstrap.Col
    , Grid = ReactBootstrap.Grid
    ;

var ReactRouterBootstrap = require('react-router-bootstrap')
//    , NavItem = ReactRouterBootstrap.NavItem
//    , DropdownButton = ReactRouterBootstrap.DropdownButton
//    , NavItemLink = ReactRouterBootstrap.NavItemLink
//    , MenuItem = ReactRouterBootstrap.MenuItem
    , MenuItemLink = ReactRouterBootstrap.MenuItemLink
    , ButtonLink = ReactRouterBootstrap.ButtonLink
    ;

var Dashboard = React.createClass({

  render: function() {

    return (
      <div>
      <Navbar brand="React-Bootstrap">
                    <Nav>
                        <NavItem eventKey={1} href="#">Link</NavItem>
                        <NavItem eventKey={2} href="#">Link</NavItem>
                    </Nav>

                    <Nav pullRight>
                      <NavItem eventKey={1} href="#">Link Right</NavItem>
                      <NavItem eventKey={2} href="#">Link Right</NavItem>
                    </Nav>
                </Navbar>
              </div>
    );
  }
});

module.exports = Dashboard;
