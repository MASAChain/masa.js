import Masa from '../lib/masa'
import { expect } from 'chai'
import { GANACHE_MNEMONIC } from './util'

describe('masa.js', () => {
  it('should load', () => {
    const masa = new Masa()
    expect(masa).to.be.ok
  })
  describe('masa point', () => {
    let masaPoint
    beforeEach(() => {
      const masa = new Masa()
      masaPoint = masa.point('0x1234567890abcdef1234')
    })
    it('get masa point amount', () => {
      expect(masaPoint.amountOf()).to.be.equal(500)
    })
    it('get community masa point amount', () => {
      expect(masaPoint.communityAmountOf(5)).to.be.equal(200)
    })
    it('get feedback transaction', () => {
      const transaction = masaPoint.feedback('0x1111111111aaaaaaaaaa', 5, 1, 'nice guy')
      expect(transaction).to.be.a('transaction')
    })
  })
  describe('wallet functions', function() {
    this.timeout(10000)
    let masa
    beforeEach(() => {
      masa = new Masa()
    })
    it('generate new wallet', () => {
      const wallet = masa.generateNewWallet()
      expect(wallet).to.be.ok
      expect(wallet).to.be.a('wallet')
    })
    it('restore wallet', () => {
      const wallet = masa.restoreWallet(GANACHE_MNEMONIC)
      expect(wallet).to.be.ok
      expect(wallet).to.be.a('wallet')
    })
  })
})
