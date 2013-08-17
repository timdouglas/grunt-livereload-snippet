# grunt-livereload-snippet

> Add livereload js snippet to html

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

<!--
```shell
npm install grunt-livereload-snippet --save-dev
```
-->

Because it's not published on `npm` yet, add this git repo to your project's `package.json` file:

```json
{
  "dependencies": {
    "grunt-livereload-snippet": "https://github.com/timdouglas/grunt-livereload-snippet/tarball/master"
  }
}

```

Once the plugin has been installed (`npm install`), it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-livereload-snippet');
```

## The "livereload_snippet" task

### Overview
In your project's Gruntfile, add a section named `livereload_snippet` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  livereload_snippet: {
    //task-specific options
    options: {
      host: 'localhost', //livereload hostname
      port: 35729, //livereload port
      file: 'index.html', //file to add script snippet to, relative to gruntfile
      add: true, //add to file
      before: '</body>', //location in document to add snippet, before this string
      //or:
      after: '<head>', //location in document to add snippet, after this string
    },
    remove: {
      //so you can remove the script snippet...
      options: {
        add: false
      }
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
Type: `String`
Default value: `index.html`

Relative path (from grunt) to the file that will get the snippet

#### options.add
Type: `Boolean`
Default value: `true`

Set this to false to remove the snippet from the file

#### options.before & options.after
Type: `String`
Default value: `undefined`

If either is set, adds snippet before or after specified location in document.
Otherwise, just adds snippet to end of file.

## Release History
_(Nothing yet)_
