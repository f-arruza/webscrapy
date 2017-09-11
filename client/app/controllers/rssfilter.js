import Ember from 'ember';
import ENV from 'client/config/environment';

export default Ember.Controller.extend({
  init: function() {
    this._super();
    this.set('filter', "");
    this.set('result', []);
  },
  filter: "",
  result: [],
  filteredNews: Ember.computed('filter', function() {
    if(this.get('filter')!="" && this.get('filter')!=null){
      this.set('result', []);
      var self = this;
      $('#modal').modal({backdrop: 'static', keyboard: false});
      Ember.$.getJSON(
        ENV.APP.API_HOST + '/api/v1/gnews/' + this.get('filter'),
        function(data){
          data.forEach(function(newFiltered){
            self.result.addObject(newFiltered);
          });
          $('#modal').modal('hide');
        }
      );
    }
  }),
  actions: {
    changeFilter(){
      this.set('filter', Ember.$("#keyword").val());
    }
  }
});
