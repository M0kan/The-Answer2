
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
    var contrast = this.props.combo.contrast.toFixed(2)
    return (
      <div className="mb2"
        style={previewStyle}>
        <div className="flex flex-center flex-wrap mxn2">
          <div className="flex-auto px2">
            <HeadingBadge {...this.props} />
          </div>
          <div className="h2 bold px2">{contrast}</div>
        </div>
        <h2 className="h1 mt0">Contrast</h2>
        <p className="">Contrast is the difference in luminance or color t