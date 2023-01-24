const coreLibraries = new Set(['react', 'react-dom', 'react-router-dom']);
module.exports = {
  name: 'remote',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
