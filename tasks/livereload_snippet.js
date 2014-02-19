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
      path = require('path'),
      options = this.options({
        port: 35729,
        hostname: 'localhost',
        add: true,
        after: undefined,
        before: undefined
      }),
      contents,
      res,
      err = false,
      snippet_regex = /<script src\=\"http:\/\/.*\:[0-9]+\/livereload\.js\?snipver\=1\"\><\/script>/gi,
      snippet = '<script src="http://'+options.hostname+':'+options.port+'/livereload.js?snipver=1"></script>';


    this.files.forEach(function(f) {
      //filter out missing files
      var src = f.src.filter(function(path) {
        if (!grunt.file.exists(path)) {
          grunt.log.warn('Source file "' + path + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(file) {
        //get file contents
        contents = grunt.file.read(file);

        if(!contents) {
          grunt.warn("could not open file "+file);
          err = true;
          return true;
        }

        //remove any existing snippets
        contents = contents.replace(snippet_regex, '');

        //add snippet if allowed...
        if(options.add === true) {
          if(options.after !== undefined) {
            contents = contents.relace(new RegExp(options.after, "g"), options.after + snippet);
          } else if(options.before !== undefined) {
            contents = contents.replace(new RegExp(options.before, "g"), snippet + options.before);
          } else {
            contents += snippet;
          }
        }

        var res = grunt.file.write(file, contents);

        if(res) {
          if(options.add === true) {
            grunt.log.writeln("Added livereload snippet to "+file);
          } else {
            grunt.log.writeln("Remove livereload snippet from "+file);
          }
        }
        else {
          grunt.warn("could not write to file "+file);
          err = true
          return false;
        }
      });
    });
  });
};
