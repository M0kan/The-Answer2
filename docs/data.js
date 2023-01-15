

var fs = require('fs')
var path = require('path')
var marked = require('marked')
var cssnext = require('cssnext')
var clrs = require('colors.css')

var pkg = require('../package.json')
var md = fs.readFileSync(path.join(__dirname, '../README.md'), 'utf8')
var readme = marked(md)

var colors = Object.keys(clrs).map(function (key) {
  return clrs[key]
})

module.exports = {
  title: 'Colorable',
  description: pkg.description,