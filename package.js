Package.describe({
  name: 'ksrv:autoform-inputmask',
  version: '0.1.0',
  summary: 'Meteor autoform field with inputmask.',
  git: 'https://github.com/ksrv/autoform-inputmask.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.5.1');
  api.use('ecmascript');
  api.use('templating', 'client');
  api.use('underscore', 'client');
  api.use('aldeed:autoform@6.3.0');
  api.use('bigdsk:inputmask@3.1.0');
  api.use('momentjs:moment@2.14.4');
  api.addFiles('autoform-inputmask.js', 'client');
  api.addFiles('autoform-inputmask.html', 'client');
});
