const readline = require('./createReadlineInterface');
const log = require('../log');

/**
 * Asks the user a question.
 *
 * @param {String} question Question to ask the user.
 * @param {*} type Type for typecasting the returned result
 * @param {Function} resolve Promise resolver
 * @param {Function} reject Promise rejector
 * @param {*} defaultValue Default value if nothing entered (makes it not required)
 * @param {Number} retryCount Current retry for the question
 * @param {Number} maxRetries Max number of retries allowed
 * @param {String} namespace Optional namespace to pass through to log()
 * @param {Object} logConfig Configuration to pass to logs
 */
const askQuestion = (
  question,
  {
    type,
    resolve,
    reject,
    defaultValue = undefined,
    retryCount = 0,
    maxRetries = 3,
    namespace = undefined,
    logConfig = {},
  },
) => {
  // Max retries
  if (retryCount >= maxRetries) {
    log.error(
      'Max number of retries. Please try again later.',
      namespace,
      undefined,
      logConfig,
    );
    process.exit();
  }

  // Callback on user press "enter"
  readline.on('line', (_answer) => {
    const answer = _answer.trim();

    // Return nothing if empty and not required
    if (answer === '' && defaultValue !== undefined) {
      resolve(defaultValue);
      return;
    }

    // Type checking/casting
    switch (type) {
      case Number:
        if (!/^\d+$/.test(answer)) {
          log.error(
            'Please enter a number.',
            namespace,
            undefined,
            logConfig,
          );
          readline.close();
          askQuestion(question, { retryCount: retryCount + 1, type, resolve, reject });
          return;
        }
        resolve(parseInt(answer, 10));
        break;
      case String:
      default:
        resolve(answer.toLowerCase());
    }
  });

  // Set the question prompt and call
  const prompt = `${log.inform(question, namespace, { ...logConfig, display: false })} `;
  readline.setPrompt(prompt, prompt.length);
  readline.prompt();
};

module.exports = askQuestion;
