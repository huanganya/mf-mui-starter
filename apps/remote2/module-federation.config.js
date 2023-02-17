const coreLibraries = new Set(['react', 'react-dom', 'react-router-dom']);
module.exports = {
  name: 'remote2',
  exposes: {
    './Module': './src/remote2-entry.ts',
  },
};
