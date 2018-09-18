import Transaction from './transaction'

/**
 * MasaPoint managing class.
 * This class provide functions for access to MasaPoint Smart Contract on Ethereum.
 */
class MasaPoint {

  /**
   * @constructor
   * @param provider require for explorer functions
   * @param wallet require for signed functions
   */
  constructor(provider, wallet) {
    this.provider = provider
    this.wallet = wallet
  }
  /**
   * Get the amount of valid points.
   * @param address the owner of masa point
   * @returns {number} point of the user
   */
  amountOf(address) {
    // TODO: implement
    if (address === '0x6861766520636f696e20697300000000000000b8') {
      return 200
    }
    return 500
  }

  /**
   * Get the amount of valid points in a specific community.
   * @param address the owner of masa point
   * @param communityId community id
   * @returns {number} point of the user in the community
   */
  communityAmountOf(address, communityId) {
    // TODO: implement
    return 200
  }

  /**
   * Create feedback raw transaction.
   * @param to feedback received user address
   * @param communityId the community regarding of feedback
   * @param feelingsId Gratitude: 1 / Empathy: 2 /Support: 3
   * @param msg reason for feelings
   * @returns {Transaction}
   */
  feedback(to, communityId, feelingsId, msg) {
    // TODO: implement
    if (this.wallet === undefined) {
      throw new TypeError('Wallet is NULL! need for sign.')
    }
    return new Transaction()
  }

  get [Symbol.toStringTag]() {
    return 'MasaPoint'
  }
}

export default MasaPoint
