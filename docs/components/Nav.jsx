

var React = require('react')
var Link = require('react-router').Link

var Nav = React.createClass({

  render: function () {
    return (
      <nav className='sm-flex border-bottom'>
        <a href={this.props.baseUrl} 
          className='btn py2'>
          Colorable
        </a>
        <a href={this.props.baseUrl + 'demos'}
          className='btn py2'>
          Demos
        </a>
        <a href={this.props.baseUrl + 'demos/text'}