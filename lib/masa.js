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
  }

  /**
   * Get the MasaPoint.
   * @param address
   * @return {MasaPoint}
   */
  point(address) {
    return new MasaPoint(address)
  }

  /**
   * Get the amount of valid points in a specific community of specific user.
   * @param address
   * @param communityId
   * @return {number}
   */
  getCommunityPoint(address, communityId) {
    return MasaPoint.communityAmountOf(address, communityId)
  }

  /**
   * send feedback to to user. see {@link MasaPoint.feedback}
   * @param to feedback receiver user address
   * @param communityId the community regarding of feedback
   * @param feelingsId
   * @param msg
   * @return {Transaction}
   */
  feedback(to, communityId, feelingsId, msg) {
    return MasaPoint.feedback(to, communityId, feelingsId, msg)
  }
}

export default Masa
