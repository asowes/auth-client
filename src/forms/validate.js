export function validateRequire(value, message) {
  return validate(!value, message || "请输入");
}

/**
 * Validate a single condition
 *
 * @param whenError
 * @param msg
 * @returns {*|boolean}
 */
function validate(whenError, msg) {
  return whenError ? msg : true;
}

/**
 * Validate multiple conditions
 *
 * @param validations [{whenError: boolean, msg: string}] whenError is validate, msg is validate message
 * @returns {boolean|*}
 */
function validateMore(validations) {
  const v = validations.find((v) => v.whenError);
  if (!v || !v.whenError) {
    return true;
  }
  return v.msg;
}
