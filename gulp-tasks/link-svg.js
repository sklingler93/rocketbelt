(function () {
  'use strict';

  module.exports = function (gulp, plugins, config) {
    return function () {
      return plugins.vinylFs.src(config.patternsPath + '/**/*.symbols.svg')
        .pipe(plugins.debug())
        .pipe(plugins.plumber({ errorHandler: plugins.notify.onError('Error: <%= error.message %>') }))
        .pipe(plugins.vinylFs.symlink(config.templatesPath, { relative: true }));
    };
  };
})();
