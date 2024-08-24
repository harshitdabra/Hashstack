require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');

module.exports = {
  defaultNetwork: "bsctestnet",
  networks: {
    bsctestnet: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      accounts: ['a992b634b0a3c3b8a6c87852400cafcd0e21865ca7d056183668ddede468d818'] // Replace with your BSC testnet private key
    },
  },
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
