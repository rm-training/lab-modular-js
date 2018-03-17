({
  // start to look for modules by id from here
  // all path lookups will be relative
  baseUrl: "public/scripts",
  paths: {
    // unless a module id begins with vendor, then look here...
    vendor: '../vendor'
  },
  waitSeconds: 15
});
