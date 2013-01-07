/*
 * grunt-plato
 * https://github.com/jsoverson/grunt-plato
 *
 * Copyright (c) 2013 Jarrod Overson
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var plato = require('plato');

  grunt.registerMultiTask('plato', 'Generate static analysis charts with plato', function() {

    var options = this.options({
      jshint: {},
      complexity: {}
    });

    if (options.jshint && !options.jshint.options) {
      options.jshint = {
        options : options.jshint,
        globals : options.jshint.globals || {}
      };
      delete options.jshint.options.globals;
    }

    console.log(options);

    var done = this.async();

    plato.inspect(this.file.src, this.file.dest, options, function(){
      done();
    });

  });

};
