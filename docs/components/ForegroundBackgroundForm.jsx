
var React = require('react')
var Color = require('color')
var HslSliders = require('react-hsl-sliders')

var ForegroundBackgroundForm = React.createClass({

  handleForegroundChange: function (e) {
    this.props.setForeground(e.target.value)
  },

  handleBackgroundChange: function (e) {
    this.props.setBackground(e.target.value)
  },

  render: function () {
    var foreground = this.props.foreground
    var background = this.props.background
    try {
      var light = Color(background).light()
    } catch(e) {
      var light = true
    }
    var styles = {
      container: {
        color: light ? '#111' : '#fff'
      },
      input: {
        color: 'inherit'
      }
    }
    return (
      <div className="sm-flex flex-center mxn2"
        style={styles.container}>
        <div className="sm-col-6 px2">
          <label htmlFor="foreground-hex-input" className="h5 bold">Foreground</label>
          <input type="text"
            id="foreground-hex-input"
            value={foreground}
            onChange={this.handleForegroundChange}
            style={styles.input}
            className='block col-12 field bg-darken-1'