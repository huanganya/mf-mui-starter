const withModuleFederation = require('@nrwl/react/module-federation');
const moduleFederationConfig = require('./module-federation.config');

module.exports = withModuleFederation({
  ...moduleFederationConfig,
});
