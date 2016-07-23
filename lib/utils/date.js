// time constants
const MS_PER_S = 1000;
const S_PER_M = 60;
const M_PER_H = 60;
const H_PER_D = 24;
const MS_PER_M = MS_PER_S * S_PER_M;
const MS_PER_H = MS_PER_M * M_PER_H;
const MS_PER_D = MS_PER_H * H_PER_D;
const M_PER_D = M_PER_H * H_PER_D;
const S_PER_H = S_PER_M * M_PER_H;
const S_PER_D = S_PER_H * H_PER_D;

/**
 * Add a leading 0 to any one-digit number
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

/**
 * Get the difference between two dates
 *
 * @param {Number} start - Date in milliseconds
 * @param {Number} end - Date in milliseconds
 * @returns {Object|Boolean} FALSE if the starting date is bigger than the ending one
 */
function diff(start, end) {
  // time left in milliseconds
  const t = end - start;

  if (t < 0) {
    return false;
  }

  const d = Math.floor(t / MS_PER_D);
  const h = Math.floor(t / MS_PER_H - d * H_PER_D);
  const m = Math.floor(t / MS_PER_M - d * M_PER_D - h * M_PER_H);
  const s = Math.floor(t / MS_PER_S - d * S_PER_D - h * S_PER_H - m * S_PER_M);

  return {
    days: d,
    hours: h,
    minutes: m,
    seconds: s,
    milliseconds: t - (d * MS_PER_D + h * MS_PER_H + m * MS_PER_M + s * MS_PER_S),
  };
}

export { diff, twoDigits };
