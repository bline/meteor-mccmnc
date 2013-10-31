Package.describe({
  summary: "MCCMNC mapping library"
});

both = ['client', 'server']
Package.on_use(function (api) {
  api.use('underscore', both);
  path = Npm.require('path')
  api.add_files([
    'pre.js',
    path.join('mccmnc', 'lib', 'mccmnc.js'),
    'post.js'
  ], both);
  api.export(['cellcode'], both);
});
