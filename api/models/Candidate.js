/**
 * Condidate.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string'
    },
    image: {
      type: 'string'
    },
    description: { 
      type: 'string'
    },
    timeJob: {
      type: 'string'
    },
    timeArea: {
      type: 'string'
    },
    votesUp: {
      type: 'number',
      defaultsTo: 0
    },
    votesDown: {
      type: 'number',
      defaultsTo: 0
    }
  }
};
