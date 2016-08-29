/**
 * Call the provided fn function recursively as many times as the times argument, using the result
 * of the last call as the argument for the next one
 *
 * @param {function} fn
 * @param {any} arg
 * @param {number} times
 * @returns {any}
 */
function recur(fn, arg, times) {
  if (!Number.isInteger(times)) {
    throw new Error('"times" argument must be an integer');
  }

  if (times <= 0) {
    return arg;
  }

  return recur(
    fn,
    fn.call(null, arg),
    --times
  );
}

export default recur;
