import Transaction from './transaction'

/**
 * MasaPoint managing class
 */
class MasaPoint {
  /**
   * @constructor
   * @param address the owner of masa point
   */
  constructor(address) {
    this.address = address
  }
  /**
   * Get the amount of valid points.
   * @returns {number} point of the user
   */
  amountOf() {
    // TODO: implement
    return 500
  }

  /**
   * Get the amount of valid points in a specific community.
   * @param communityId community id
   * @returns {number} point of the user in the community
   */
  communityAmountOf(communityId) {
    // TODO: implement
    return 200
  }

  /**
   * Create feedback (sined / unsigned) transaction.
   * @param to feedback received user address
   * @param communityId the community regarding of feedback
   * @param feelingsId Gratitude: 1 / Empathy: 2 /Support: 3
   * @param msg reason for feelings
   * @param signed [optional default false] return signed transaction if true.
   * @returns {Transaction}
   */
  feedback(to, communityId, feelingsId, msg, signed = false) {
    // TODO: implement
    return new Transaction()
  }

  get [Symbol.toStringTag]() {
    return 'MasaPoint'
  }
}

export default MasaPoint
