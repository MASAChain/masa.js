import Transaction from './transaction'

/**
 * Community managing class
 */
class Community {
  constractor(wallet) {
    this.wallet = wallet
  }
  /**
   * create new Community.
   * @param name (unique) as communityId.
   * @return {Promise<Transaction>}
   */
  async create(name) {
    return new Transaction()
  }

  get [Symbol.toStringTag]() {
    return 'Community'
  }
}

export default Community
