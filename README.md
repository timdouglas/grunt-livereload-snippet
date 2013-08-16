# grunt-livereload-snippet

> Add livereload js snippet to html

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-livereload-snippet --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-livereload-snippet');
```

## The "livereload_snippet" task

### Overview
In your project's Gruntfile, add a section named `livereload_snippet` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  livereload_snippet: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.hostname
Type: `String`
Default value: `localhost`

The hostname for your livereload server.

#### options.port
Type: `String`
Default value: `35729`

Port for livereload server.

#### options.file
Type: 'String'
Default value: 'index.html'

Relative path (from grunt) to the file that will get the snippet

## Release History
_(Nothing yet)_
