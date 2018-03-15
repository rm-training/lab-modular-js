/**
 * @param  {...array}
 */
function logger(...args) {
  console.log(args);
};

/**
 * @param  {...array}
 */
function logFormatted(...args) {
  console.group('Logger here...');
  console.log(args);
  console.groupEnd();
};

/**
 * @param  {...array}
 */
function logGrouped(...args) {
  console.group('Logger here...');
  args.forEach(function(el) {
    logger(el);
  });
  console.groupEnd();
};
