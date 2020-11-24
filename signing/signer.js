import { getWallet } from '~/common/keystore'
import { getLedger } from '~/common/ledger'

export async function getSigner(
  signingType,
  { address, password },
  chainId,
  store
) {
  if (signingType === `local`) {
    const { Secp256k1HdWallet } = await import('@cosmjs/launchpad')
    const { wallet: serializedWallet } = getWallet(address)
    const wallet = await Secp256k1HdWallet.deserialize(
      serializedWallet,
      password
    )
    return wallet
  } else if (signingType === `ledger`) {
    return await getLedger(
      store.state.data.isWindows,
      store.state.data.hasHIDEnabled
    )
  } else if (signingType === `keplr`) {
    return window.getOfflineSigner(chainId)
  }

  throw new Error(`Signing via ${signingType} is not supported`)
}
