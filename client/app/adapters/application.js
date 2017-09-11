import DS from 'ember-data';
import ENV from 'client/config/environment';

export default DS.JSONAPIAdapter.extend({
  headers: {
    'Accept': 'application/json'
    // "crossDomain": true,
    // "content-type": "application/json",
    // "cache-control": "no-cache",
    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Headers": "*"
  },
  host: ENV.APP.API_HOST,
  namespace: 'api/v1',
  buildURL: function(type, id, record) {
    return this._super(type, id, record) + '/';
  }
});
