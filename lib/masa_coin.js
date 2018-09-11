import Transaction from './transaction'

/**
 * MasaCoin managing class
 */
class MasaCoin {
  /**
   * Get the amount of coin.
   * @returns {number} amount of coin.
   */
  async amount() {
    // TODO: implement
    return 100
  }

  /**
   * Send coin to other user.
   * @param address receiver address
   * @param amount sending amount
   * @return Promise<Transaction>
   */
  async transfer(address, amount) {
    // TODO: implement
    return Promise.resolve(new Transaction())
  }
}

export default MasaCoin
