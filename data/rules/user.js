const formatDate = require('../../util/date/formatDate');

module.exports = {
  EMAIL_FIELD_MIN_LEN: 5,
  EMAIL_FIELD_MAX_LEN: 240,
  PASSWORD_FIELD_MIN_LEN: 8,
  PASSWORD_FIELD_MAX_LEN: 64,
  PASSWORD_FIELD_PATTERN: '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$',
  DATE_OF_BIRTH_AFTER: formatDate(new Date(Date.now() - 3732480000000)), // 120 yrs ago
  DATE_OF_BIRTH_BEFORE: formatDate(new Date(Date.now() - 559872000000)), // - 18 yrs ago
  USER_STATUSES: [
    'CONFIRMED', //               User has been created and can sign in
    'UNCONFIRMED', //             User has been created, but cannot sign in
    'PASSWORD_RESET_REQUIRED', // User must reset password before logging in
    'DISABLED', //                Account has been temporarily disabled
  ],
};
