const askQuestion = require('./askQuestion');

/**
 * Prompts the user for input in an executable node script.
 *
 * @param {String} question Question to prompt user with
 * @param {*} type Type for typecasting the returned result
 * @param {*} defaultValue Default value if nothing entered (makes it not required)
 * @param {String} namespace Optional namespace to pass through to log()
 * @param {Object} logConfig Configuration to pass to logs
 */
module.exports = (
  question,
  {
    type = String,
    defaultValue = undefined,
    namespace = undefined,
    logConfig = {},
  } = {},
) => (
  new Promise((resolve, reject) => (
    askQuestion(question, { type, resolve, reject, defaultValue, namespace, logConfig })
  ))
);
