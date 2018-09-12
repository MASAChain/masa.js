import Wallet from '../lib/wallet'
import { expect } from 'chai'

const GANACHE_MNEMONIC = 'special client interest guess wrist bring rack hockey tip divert three toe'
describe('wallet.js', () => {
  it('should load', () => {
    expect(Wallet).to.be.ok
  })
  describe('initialize', function() {
    it('generate mnemonic', () => {
      const mnemonic = Wallet.generateMnemonic()
      expect(mnemonic).to.be.a('string')
      expect(mnemonic.split(' ')).to.have.lengthOf(12)
    })
    it('create wallet', function() {
      this.timeout(10000)
      const wallet = new Wallet(GANACHE_MNEMONIC)
      expect(wallet).to.be.ok
      expect(wallet).to.be.a('wallet')
    })
    it('failed. if specify undefined', () => {
      expect(function() {
        return new Wallet(undefined)
      }).to.throw('invalid mnemonic!')
    })
    it('failed. if specify empty string', () => {
      expect(function() {
        return new Wallet('')
      }).to.throw('invalid mnemonic!')
    })
  })
  describe('wallet functions', function() {
    this.timeout(10000)
    let wallet
    before(function() {
      wallet = new Wallet(GANACHE_MNEMONIC)
    })
    it('check privateKey', () => {
      expect(wallet.privateKey.toString('hex')).to.be.equal('4d8d0ece9fd220f7fb7f53f71e636ac377aa8bab4e5c8e601e515a625917134e')
    })
    it('check publicKey', () => {
      expect(wallet.publicKey.toString('hex')).to.be.equal('06d40dcd8748c724e20405eb837a6fc02eea32492dbea17b852ae1dba8500ba1193d843bb694f8d0fafab4007f213607a85297ebf505b2e9a1708b6d3af25553')
    })
    it('check address', () => {
      expect(wallet.address).to.be.equal('0xdaf8f49a3671082ed2ab0b67ecb7f0182faeab6c')
    })
  })
})
