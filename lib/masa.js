import MasaPoint from './masa_point'

/**
 * Masa system client library class.
 */
class Masa {
  /**
   * @constructor
   */
  constructor() {
    console.log('masa.js')
    this.point = new MasaPoint()
  }
}

const masa = new Masa()
export default masa
