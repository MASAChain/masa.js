import {expect} from 'chai'
import MasaTx from '../lib/masa_tx'
import {GANACHE_MNEMONIC} from './util'

describe('MasaTx', () => {
  describe('init', () => {
    it('should load', () => {
      expect(MasaTx).to.be.ok
    })
    it('create with generate Wallet', () => {
      const masaTx = new MasaTx()
      expect(masaTx).to.be.ok
      expect(masaTx.wallet.mnemonic).to.be.a('string')
      expect(masaTx.wallet.mnemonic).to.be.not.equal(GANACHE_MNEMONIC)
    })
    it('create with restore Wallet', () => {
      const masaTx = new MasaTx(GANACHE_MNEMONIC)
      expect(masaTx).to.be.ok
      expect(masaTx.wallet.mnemonic).to.be.a('string')
      expect(masaTx.wallet.mnemonic).to.be.equal(GANACHE_MNEMONIC)
    })
  })
  describe('masaPoint', () => {
    let masaTx
    beforeEach(() => {
      masaTx = new MasaTx()
    })
    it('create feedback transaction', async () => {
      const feedbackTx = await masaTx.point.feedback('0xdaF8F49A3671082ED2ab0b67ecB7f0182fAEAb6C', 'Challenge Caravan', 1, '')
      expect(feedbackTx).to.be.a('transaction')
    })
    it('unsupport amountOf', () => {
      expect(function () {
        masaTx.point.amountOf('0x6861766520636f696e20697300000000000000b8')
      }).to.throw('Not support function. Please use Masa.')
    })
    it('unsupport communityAmountOf', () => {
      expect(function () {
        masaTx.point.communityAmountOf('0x6861766520636f696e20697300000000000000b8', 'chare cara')
      }).to.throw('Not support function. Please use Masa.')
    })
  })
  describe('masaCoin', () => {
    let masaTx
    beforeEach(() => {
      masaTx = new MasaTx()
    })
    it('create transfer transaction', async () => {
      const transferTx = await masaTx.coin.transfer('0xdaF8F49A3671082ED2ab0b67ecB7f0182fAEAb6C', 100)
      expect(transferTx).to.be.a('transaction')
    })
    it('unsupport balanceOf', () => {
      return masaTx.coin
        .balanceOf('0xdaF8F49A3671082ED2ab0b67ecB7f0182fAEAb6C').then(balance => {
          expect.fail('not happend error')
        }).catch(e => {
          expect(e.message).to.be.equal('Not support function. Please use Masa.')
        })
    })
  })
  describe('community', () => {
    let masaTx
    beforeEach(() => {
      masaTx = new MasaTx()
    })
    it('create create transaction', async () => {
      const createTx = await masaTx.community.create('SDGs')
      expect(createTx).to.be.a('transaction')
    })
  })
})
