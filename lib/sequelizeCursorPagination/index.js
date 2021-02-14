/* eslint-disable no-param-reassign */

const paginate = require('./paginate');

module.exports = () => (
  (Model) => {
    Model.paginate = paginate(Model);
    return Model;
  }
);
