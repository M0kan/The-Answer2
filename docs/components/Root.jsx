
var React = require('react')
var Head = require('./Head.jsx')
var Nav = require('./Nav.jsx')
var Footer = require('./Footer.jsx')
var Router = require('react-router')
var RouteHandler = Router.RouteHandler

var Root = React.createClass({

  render: function() {
    var initialProps = {
      __html: safeStringify(this.props)
    }
    return (
      <html>
        <Head {...this