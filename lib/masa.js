import MasaPoint from './masa_point'
import MasaCoin from './masa_coin'

/**
 * Masa system client library class.
 */
class Masa {
  /**
   * @constructor
   */
  constructor() {
    console.log('masa.js')
    const provider = {}
    this.point = new class extends MasaPoint {
      feedback(to, communityId, feelingsId, msg) {
        throw new TypeError('Not support function. Please use MasaTx.')
      }
    }(provider, null)
    this.coin = new class extends MasaCoin {
      transfer(address) {
        throw new TypeError('Not support function. Please use MasaTx.')
      }
    }(provider, null)
  }
}

const masa = new Masa()
export default masa
