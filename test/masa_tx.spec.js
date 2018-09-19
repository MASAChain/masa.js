import { expect } from 'chai'
import MasaTx from '../lib/masa_tx'
import { GANACHE_MNEMONIC } from './util'

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
})
