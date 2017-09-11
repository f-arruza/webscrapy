import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  link: DS.attr('string'),
  academic_unit: DS.attr('string')  
});
