const { assert } = require('chai');

const Pixel32 = artifacts.require('./Pixel32.sol');

require('chai').use(require('chai-as-promised')).should();

contract('Pixel32', (accounts) => {
  let contract;

  console.log(accounts);

  describe('deployment', async () => {
    it('deploy successful', async () => {
      contract = await Pixel32.deployed();
      const address = contract.address;
      console.log(address);
      assert.notEqual(address, '');
    });
  });

  describe('minting', async () => {
    it('create a new token', async () => {
      let str = '';
      for (i = 0; i < 32 * 32; i++) {
        str = str.concat('#000000');
        if (i < 32 * 32) str = str.concat(',');
      }
      let result = await contract.mint(str);
      console.log(result);

      str = '';
      for (i = 0; i < 32 * 32; i++) {
        str = str.concat('#111111');
        if (i < 32 * 32) str = str.concat(',');
      }

      result = await contract.mint(str);
      console.log(result);
    });
  });

  describe('checking total supply', async () => {
    it('check total supply', async () => {
      const totalSupply = await contract.getPixArts();
      console.log(totalSupply);
    });
  });
});
