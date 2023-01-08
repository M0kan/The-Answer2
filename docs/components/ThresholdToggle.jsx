
var React = require('react')
var cx = require('classnames')

var ThresholdToggle = React.createClass({

  handleChange: function(e) {
    var value = e.target.value
    this.props.updateThreshold(value