import Transaction from './transaction'

/**
 * Community managing class
 */
class Community {
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
