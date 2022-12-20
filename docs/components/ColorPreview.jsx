
var React = require('react')
var HeadingBadge = require('./HeadingBadge.jsx')

var ColorPreview = React.createClass({

  getDefaultProps: function () {
    return {
      color: {
        hex: '',
      },
      combo: {
        hex: '',
        contrast: 0
      }
    }
  },

  render: function () {
    var color = this.props.hex
    var backgroundColor = this.props.combo.hex
    var previewStyle = {
      color: color,
      backgroundColor: backgroundColor
    }
    var contrast = this.props.combo.co