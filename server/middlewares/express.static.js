const express = require('express');

// serve data assets from the ./public directory
module.exports = {
  name: 'express.static',
  middleware: () => (
    express.static('public')
  ),
};
