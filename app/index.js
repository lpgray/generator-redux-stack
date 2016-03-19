'use strict';

var normalizeUrl = require('normalize-url');
var path = require('path');
var humanizeUrl = require('humanize-url');
var yeoman = require('yeoman-generator');
var mkdirp = require('mkdirp');
var _s = require('underscore.string');

module.exports = yeoman.generators.Base.extend({
	init: function() {
    var cb = this.async();

    this.prompt([{
			name: 'moduleName',
			message: 'What do you want to name your app?',
			default: this.appname.replace(/\s/g, '-'),
			filter: function(val) {
				return _s.slugify(val);
			}
		}],
    function(props) {
      var asyncCount = 0;
      this.moduleName = props.moduleName;

      this.template('editorconfig', '.editorconfig');
      this.template('gitignore', '.gitignore');
      this.template('eslintrc', '.eslintrc');
      this.template('istanbul.yml', '.istanbul.yml');
      this.template('build/index.html');
      this.template('webpack.config.js');
      this.template('webpack.config.production.js');
      // needed so npm doesn't try to use it and fail
      this.template('_package.json', 'package.json');
      this.template('README.md');
      this.template('babelrc', '.babelrc');
      this.directory('build', 'build');
      this.directory('server', 'server');
      this.directory('src', 'src');
      this.directory('test', 'test');

      cb();

    }.bind(this));
	},
	install: function() {
    this.installDependencies({ bower: false });
  }
});
