export default {
  id: 'cosmos-hub-testnet', // DEPRECATE, only used for Lunie extension, NOT CHAIN ID
  name: 'Agoric Stage',
  description: 'Agoric is a cryptoeconomy with JS smart contracts.',
  logo: `logo.svg`,
  website: 'https://agoric.com',
  apiURL: 'http://rpc.stage.agoric.net:1317', // use `npx lcp --proxyUrl http://34.123.30.100:1317`
  rpcURL: 'ws://rpc.stage.agoric.net:26657',
  stakingDenom: 'BLD',
  coinLookup: [
    {
      viewDenom: 'BLD',
      chainDenom: 'ubld',
      chainToViewConversionFactor: 1e-6,
      icon: `currencies/bld.png`,
    },
    {
      viewDenom: 'RUN',
      chainDenom: 'urun',
      chainToViewConversionFactor: 1e-6,
      icon: `currencies/run.png`,
    },
  ],
  addressPrefix: 'agoric',
  validatorAddressPrefix: 'agoricvaloper',
  validatorConsensusaddressPrefix: 'agoricvalcons', // needed to map validators from staking queries to the validator set
  HDPath: `m/44'/564'/0'/0/0`,
  lockUpPeriod: `21 days`,
  fees: {
    default: {
      gasEstimate: 350000,
      feeOptions: [
        {
          denom: 'RUN',
          amount: 0.001,
        },
      ],
    },
  },
  icon: `https://agoric.com/wp-content/themes/agoric_2021_theme/assets/favicon-96x96.png`,

  // This is only to be used as a developer tool and for testing purposes
  // NEVER ENABLE LOCALSIGNING IN PRODUCTION OR FOR MAINNETS
  localSigning: false,
}
