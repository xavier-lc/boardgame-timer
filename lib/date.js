module.exports = (function date() {
  /**
   * Add a following 0 to any one-digit number
   *
   * @param {Number} num
   * @returns {String}
   */
  function twoDigits(num) {
    const numString = num.toString();

    if (numString.length === 2) {
      return numString;
    }

    return '0' + num;
  }

  return {
    twoDigits: twoDigits
  };
})();
