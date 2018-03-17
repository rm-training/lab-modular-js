({
  // start to look for modules by id from here
  // all path lookups will be relative
  baseUrl: 'public/scripts',
  paths: {
    // unless a module id begins with vendor, then look here...
    vendor: '../vendor'
  },
  // tell RequireJS not to optimize/uglify because we're using ES6 code
  optimize: 'none',
  // Entry point for the modules
  name: 'app',
  // output file
  out: 'generated/scripts/r-build.js'
});
