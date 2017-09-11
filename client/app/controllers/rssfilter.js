import Ember from 'ember';
import ENV from 'client/config/environment';

export default Ember.Controller.extend({
  init: function() {
    this._super();
    this.set('filter', "");
    this.set('result', []);
  },
  filter: "Uniandes",
  result: [],
  filteredNews: Ember.computed('filter', function() {
    this.set('result', []);
    var self = this;
    Ember.$.getJSON(
      ENV.APP.API_HOST + '/api/v1/gnews/' + this.get('filter'),
      function(data){
        data.forEach(function(newFiltered){
          self.result.addObject(newFiltered);
        });
      }
    );
  }),
  actions: {
    changeFilter(){
      this.set('filter', Ember.$("#keyword").val());
    }
  }
});
