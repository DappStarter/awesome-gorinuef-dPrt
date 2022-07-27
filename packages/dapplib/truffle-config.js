require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture robot fresh tell stone note oval unusual harvest inhale flock smart'; 
let testAccounts = [
"0x372c304898549c7cb812a6a293d30fb5c18e514173341fc3c1ba162b31c47ea5",
"0xdb88cdd8d2189114974cf2c247d0963ff4abd7e1e006d375556385f165ca5fd7",
"0x206632306fd880a4d1ed6315c6301fbc30765c6ff585db63bc20cca2586a6c80",
"0xdda0386dc3c0e6d6274f5172582635ccbfd6d90e61c1e2b77b7c996b89e3cd59",
"0x7bd229c044794517ef682a0de70daa2cf6444d1f3ed9a0547f884563f536ea7a",
"0xaabbd7a6e3be5c41f3a227762415cbd3a094fe9819d50f4b5f7c046ef877e336",
"0x0fb04ee0396fd828c8840374e7ef5a1e1e0db975ebe26b170506a7b9a15aef95",
"0x366812a1f0d63b924172534dbb0be368b616f13c36d9ac3a3309cfb12c0352e0",
"0x4bcf181c3d7aefa9823c78f431952e39768ff49dfd5be76e840a9494ac42fa26",
"0x8ba7a91643e978734b3ff496c20f0b83231102fde52f947930285f6730a548a0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

