/**
 * Class for Provide convenience access to Ethereum Transaction.
 */
class Transaction {
  /**
   * sign this transaction
   * @param privateKey
   */
  signature(privateKey) {
    // TODO: implement
  }

  /**
   * serialize to json format
   * @return {JSON} json formatted transaction
   */
  toJSON() {
    // TODO: implement
    return {
      to: '',
      nonce: 2,
      gas: 0x01,
      gasPrice: 20 * 10 ** 9,
      data: '0x0000000001',
      chainId: 4447,
      v: '',
      s: '',
      r: ''
    }
  }

  get [Symbol.toStringTag]() {
    return 'Transaction'
  }
}

export default Transaction
