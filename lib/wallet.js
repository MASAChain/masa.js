import bip39 from 'bip39'
import hdkey from 'ethereumjs-wallet/hdkey'

/**
 * Masa Wallet class.
 * Provide simple wallet functions.
 * Usage:
 *   const mnemonic = Wallet.generateMnemonic()
 *   const wallet = new Wallet(mnemonic)
 *   const privateKey = wallet.privateKey // return Buffer
 *   const address = wallet.address // return string
 */
class Wallet {
  get HD_PATH() {
    return "m/44'/60'/0'/0/0"
  }

  /**
   * generate mnemonic of master seed.
   * @return {string} mnemonic
   */
  static generateMnemonic() {
    return bip39.generateMnemonic()
  }

  /**
   * create HDWallet from master seed mnemonic.
   * @constructor
   * @param mnemonic {string}
   */
  constructor(mnemonic) {
    if (!bip39.validateMnemonic(mnemonic)) {
      throw new TypeError('invalid mnemonic!')
    }
    this.mnemonic = mnemonic
    this._hdwallet = hdkey.fromMasterSeed(bip39.mnemonicToSeed(mnemonic))
    this._wallet = this._hdwallet.derivePath(this.HD_PATH).getWallet()
    this.address = '0x' + this._wallet.getAddress().toString('hex')
    this.privateKey = this._wallet.getPrivateKey()
    this.publicKey = this._wallet.getPublicKey()
  }

  get [Symbol.toStringTag]() {
    return 'Wallet'
  }
}

export default Wallet
