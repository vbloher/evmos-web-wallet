export default {
  id: 'evmos-testnet', // DEPRECATE, only used for Lunie extension, NOT CHAIN ID
  name: 'Evmos web wallet',
  description: 'Evmos web wallet',
  logo: `logo.svg`,
  website: 'https://evmos.org/',
  apiURL: 'http://207.180.203.158:1317', // use `npx lcp --proxyUrl http://89.163.223.151:1317`
  rpcURL: 'ws://207.180.203.158:26657',
  stakingDenom: 'photon',
  coinLookup: [
    {
      viewDenom: 'photon',
      chainDenom: 'aphoton',
      chainToViewConversionFactor: 1e-6,
      icon: `currencies/evmos.png`,
    },
  ],
  addressPrefix: 'evmos',
  validatorAddressPrefix: 'evmosvaloper',
  validatorConsensusaddressPrefix: 'evmosvalcons', // needed to map validators from staking queries to the validator set
  HDPath: `m/44'/118'/0'/0/0`,
  lockUpPeriod: `3 days`,
  fees: {
    default: {
      gasEstimate: 350000,
      feeOptions: [
        {
          denom: 'aphoton',
          amount: 50000,
        },
      ],
    },
  },
  icon: `currencies/evmos.png`,

  // This is only to be used as a developer tool and for testing purposes
  // NEVER ENABLE LOCALSIGNING IN PRODUCTION OR FOR MAINNETS
  localSigning: false,
}
