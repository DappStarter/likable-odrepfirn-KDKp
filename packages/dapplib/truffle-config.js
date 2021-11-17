require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey ensure success shadow shock note rural mixture grace lobster olympic tooth'; 
let testAccounts = [
"0x214cfb0d9e13f1319a3092dd69f669320b8e1d3a41ed9d47f7b4ccabe80e5715",
"0xf058c70bcd1b17feac71f1a8cd94b2e982e797b83c647542a892329bf6ba94e9",
"0xc71fc7fde6aaaeb31773e553dab43533bbf62c847322d5e905789448b331cdc8",
"0x44249a4203275eccb39f6c15d4b397f17f991d22e74bf2b2c8658c7eac0b0dba",
"0xe1a5e2b417cf6b8040556a13e185c1f07e5710f4d1cdcae4f54d457353a688b4",
"0x71193d5fa98bc1b3808d0e2db2009c509e5f6fa787637f988656e4a9e92336ca",
"0x287ef4fa582128cb885168810c66f77e0c15e65e8f5f51efaac6c5faae2018b6",
"0x6870a8f999cf0233d907c9b768f800dc2b7d35f0dfc5363f3b4893b071f9eabe",
"0x11a45a8810659d6a976ae09683613fc90c6960c92d13200d0c88e30f553f9a86",
"0x44e9a4f35afb18b6283b8f0e2a04aa2db945d2c103f5b439badb7b06cbf28b9b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

