'use strict';

var yeoman = require('yeoman-generator');
var _s = require('underscore.string');

module.exports = yeoman.generators.Base.extend({
  init: function() {
    var cb = this.async();

    this.prompt([
      {
        name: 'appName',
        message: 'What\'s the name of your app?',
        default: this.appname.replace(/\s/g, '-'),
        filter: function(val) {
          return _s.slugify(val);
        }
      },
      {
        name: 'appDescription',
        message: 'What\'s the app description?'
      },
    //   {
    //     name: 'requireApiServer',
    //     type: 'confirm',
    //     message: 'Do you need an API server?',
    //     default: false
    //   },
    //   {
    //     name: 'requireFileLoader',
    //     type: 'confirm',
    //     message: 'Do you need a static asset loader to import images and other binary files?',
    //     default: false
    //   }
    ],
    function(props) {
      var asyncCount = 0;
      this.appName = props.appName;
      this.appDescription = props.appDescription;
      this.requireApiServer = props.requireApiServer;
      this.requireFileLoader = props.requireFileLoader;

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
