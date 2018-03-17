require.config({
    // start to look for modules by id from here
    // all path lookups will be relative
    baseUrl: "scripts",
    paths: {
      // unless a module id begins with vendor, then look here...
      vendor: '../vendor'
    },
    include: ['requireLib'],
    waitSeconds: 15
});

require(['app']);
