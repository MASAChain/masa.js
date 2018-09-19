import Wallet from './wallet'
import MasaPoint from './masa_point'
import MasaCoin from './masa_coin'
import Community from './community'

/**
 * MasaTx class provide functions that create signed transaction.
 * This class needs wallet for pick up private key.
 *
 * Usage:
 *   const masaTx = new MasaTx() // generate new wallet.
 * or
 *   const masaTx = new MasaTx(mnemonic) // restore wallet from specify mnemonic
 *
 *   masaTx.point.feedback(~~~~) // return signed transaction for Masa Point Feedback.
 *   masaTx.coin.transfer(~~~) // return signed transaction for Masa Coin Transfer.
 *   masaTx.community.create(~~~) // return signed transaction for Community creation.
 */
class MasaTx {
  constructor(mnemonic = '') {
    mnemonic = mnemonic === undefined || mnemonic === '' ? Wallet.generateMnemonic() : mnemonic
    this.wallet = new Wallet(mnemonic)
    this.point = new class extends MasaPoint {
      amountOf(address) {
        throw new TypeError('Not support function. Please use Masa.')
      }
      communityAmountOf(address, communityId) {
        throw new TypeError('Not support function. Please use Masa.')
      }
    }(null, this.wallet)
    this.coin = new class extends MasaCoin {
      async balanceOf() {
        throw new TypeError('Not support function. Please use Masa.')
      }
    }(null, this.wallet)
    this.community = new Community(null, this.wallet)
  }
}

export default MasaTx
