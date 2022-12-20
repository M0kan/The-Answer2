
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

  render: function () 