/*
 * grunt-livereload-snippet
 * 
 *
 * Copyright (c) 2013 timdouglas
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('livereload_snippet', 'Add livereload js snippet to html', function() {
    var fs = require('fs'),
      done = this.async(),
      options = this.options({
        port: 35729,
        hostname: 'localhost',
        file: 'index.html',
        add: true
      }),
      file = options.file,
      contents,
      snippet_regex = /<script src\=\"\/\/.*\:[0-9]+\/livereload\.js\?snipver\=1\"\><\/script>/gi,
      snippet = '<script src="//'+options.hostname+':'+options.port+'/livereload.js?snipver=1"></script>';

    //check the file is there...
    fs.exists(file, function(exists) {
      if(exists) {
        // get file contents
        contents = grunt.file.read(file);

        if(!contents) {
          grunt.warn("could not open file "+file);
          done(false);
        }

        //remove any existing snippets
        contents = contents.replace(snippet_regex, '');

        //add snippet if allowed...
        if(options.add === true) {
          contents += snippet;
        }

        var res = grunt.file.write(file, contents);

        if(res) {
          grunt.log.writeln("Added livereload snippet to "+file);
          done();
        }
        else {
          grunt.warn("could not write to file "+file);
          done(false);
        }
      }
      else {
        grunt.warn("file "+file+" does not exist");
        done(false);
      }
    });    
  });

};
