/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: {
      type: 'string'
    },
    password: {
      type: 'string'
    },
    age: {
      type: 'number'
    },
    status: {
      type: 'string'
    },
    votes: {
      type: 'json',
      defaultsTo: {}
    }
  }
};
