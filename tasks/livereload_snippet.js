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
      done = this.async(),
      options = this.options({
        port: 35729,
        hostname: 'localhost',
        file: 'index.html',
        add: true,
        after: undefined,
        before: undefined
      }),
      file = path.resolve(options.file),
      contents,
      res,
      snippet_regex = /<script src\=\"http\:\/\/.*\:[0-9]+\/livereload\.js\?snipver\=1\"\><\/script>/gi,
      snippet = '<script src="http://'+options.hostname+':'+options.port+'/livereload.js?snipver=1"></script>';

    //check the file is there...
    fs.exists(file, function(exists) {

      if(exists === true) {
        // get file contents
        contents = grunt.file.read(file);

        if(contents === undefined) {
          grunt.warn("could not open file "+file);
          done(false);
        }
        
        if(contents.length === 0 && options.add == false) {
          grunt.log.writeln(file+" is empty, done.");
          done();
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

          done();
        }
        else {
          grunt.warn("could not write to file "+file);
          done(false);
        }
      } else {
        grunt.warn("file "+file+" does not exist");
        done(false);
      }
    });
  });
};
