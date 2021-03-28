require('babel-register');
require('babel-polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

const privateKeyDev =
  '99B3C12287537E38C90A9219D4CB074A89A16E9CDB20BF85728EBD97C343E342';

module.exports = {
  networks: {
    development: {
      provider: () => {
        return new HDWalletProvider(privateKeyDev, 'http://34.73.113.61:9933/');
      },
      network_id: '*',
      gasPrice: 100000000000,
      gas: 4612388,
    },
  },
  contracts_directory: './contracts',
  contracts_build_directory: './abis',
  compilers: {
    solc: {
      version: '0.8.0',
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
