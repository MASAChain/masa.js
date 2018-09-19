import masa from '../lib/masa'
import {expect} from 'chai'

describe('masa.js', () => {
  describe('init', () => {
    it('should load', () => {
      expect(masa).to.be.ok
    })
  })
  describe('masa point', () => {
    it('get masa point amount', () => {
      expect(masa.point.amountOf('0xaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbb')).to.be.equal(500)
      expect(masa.point.amountOf('0x6861766520636f696e20697300000000000000b8')).to.be.equal(200)
    })
    it('get community masa point amount', () => {
      expect(masa.point.communityAmountOf('0x6861766520636f696e20697300000000000000b8', 5)).to.be.equal(200)
    })
    it('masa.point.feedback is not support.', () => {
      expect(function () {
        masa.point.feedback('0x6861766520636f696e20697300000000000000b8', 'Challenge Caravan', 1, '')
      }).to.throw('Not support function. Please use MasaTx.')
    })
  })
  describe('masa coin', () => {
    it('balanceOf', async() => {
      const balance = await masa.coin.balanceOf('0xdaF8F49A3671082ED2ab0b67ecB7f0182fAEAb6C')
      return expect(balance).to.be.equal(100)
    })
    it('unsupport transfer.', () => {
      expect(function() {
        masa.coin.transfer('0xdaF8F49A3671082ED2ab0b67ecB7f0182fAEAb6C', 20)
      }).to.throw('Not support function. Please use MasaTx.')
    })
  })
})
