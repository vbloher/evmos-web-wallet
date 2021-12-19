# Evmos web wallet

Features:

- ✅ Super simple — one config file
- 🏎 Fast, modern web technologies
- 📱 Fully responsive
- ⛓ Real-time on-chain data
- 🔭 Explore mode
- 💸 Multi-denom balances support
- 🥩 Staking and unstaking management
- 💯 Complete validator list with instant search
- 🤗 Validator profiles for every validator
- 🧾 Transaction history

## Getting started

1. Run `yarn install` to install the app dependencies
2. Run `yarn dev` to serve the app at `localhost:3000`

### CORS

If the node you want to connect to doesn't have CORS enabled, you can't use it with the application. In this case use a CORS proxy (only in development) i.e. https://cors-anywhere.herokuapp.com/.

## How on-chain data works

On-chain data is managed using the [Vuex store](https://nuxtjs.org/docs/2.x/directory-structure/store/). Understanding how [Vuex](https://vuex.vuejs.org/) works will be helpful for manipulating data in Lunie Light.

### How data flows through

1. Middleware in the [`default.vue`](https://github.com/luniehq/lunie-light/blob/master/layouts/default.vue) file will call [`data/init`](https://github.com/luniehq/lunie-light/blob/master/layouts/default.vue#L24) to initialize the connection the Cosmos REST API before any pages are rendered. If the API is not initialized, requests will fail and data will not flow 🏄‍♂️
2. [Mutations](https://vuex.vuejs.org/guide/mutations.html) and [Actions](https://vuex.vuejs.org/guide/actions.html) are stored in the [`data.js`](https://github.com/luniehq/lunie-light/blob/master/store/data.js) file which manages the Vuex store and API requests
3. Actions in [`data.js`](https://github.com/luniehq/lunie-light/blob/master/store/data.js) will call query functions in the [`cosmos-source.js`](https://github.com/luniehq/lunie-light/blob/master/common/cosmosV3-source.js) file.
4. Reducers in [`cosmos-reducers.js`](https://github.com/luniehq/lunie-light/blob/master/common/cosmosV3-reducers.js) parse the responses from the API into a format that is easy for frontend Vue components to understand and work with

## Thank you kindly!
