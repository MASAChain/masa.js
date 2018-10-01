import Transaction from './transaction'

/**
 * MasaCoin managing class
 */
class MasaCoin {
  constructor(provider, wallet) {
    this.provider = provider
    this.wallet = wallet
  }
  /**
   * Get the balance of coin.
   * @param address to query the balance of.
   * @returns {Promise<number>} amount of coin.
   */
  async balanceOf(address) {
    // TODO: implement
    return 100
  }

  /**
   * Send coin to other user.
   * @param address receiver address
   * @param amount sending amount
   * @return {Promise<Transaction>}
   */
  async transfer(address, amount) {
    // TODO: implement
    return new Transaction()
  }
}

export default MasaCoin