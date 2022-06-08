// this file isn't transpiled, so must use commonJS and ES5

// Register babel tot compile before our tests
require('@babel/register')();

// Disable Webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {};


