import Ember from 'ember';
import ENV from 'client/config/environment';

export default Ember.Route.extend({
  model() {
    return Ember.$.getJSON(ENV.APP.API_HOST + '/api/v1/gnews/');
  }
});
